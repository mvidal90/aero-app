import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productsList';
import { useCounter } from '../../hooks/useCounter';
import { Card } from './Card';
import loading from '../../assets/Infinity-2.7s-200px.svg'

export const CardsGrid = () => {

    const dispatch = useDispatch();
    const { productsList, lastPage } = useSelector(state => state.list);
    const  { errors } = useSelector( state => state );
    const { counter: page, increment } = useCounter();

    useEffect(() => {
        dispatch(getProducts(page));
    }, [page, dispatch])

    const addPage = () => lastPage > page && increment();

    return (
        <>
            {errors.error && 
                <p className="error__text">{errors.msg}</p>
            }
            <InfiniteScroll
                dataLength={productsList.length}
                next={addPage}
                hasMore={lastPage !== page}
                loader={
                    <div className="w-100 d-flex center-box">
                        <img src={loading} alt="Loading..." width="20%" />
                    </div>        
                }
                endMessage={
                    <p className="cards__grid-end-message">
                        Estos son todos los productos... Por ahora ;)
                    </p>
                }
            >
                <div className="cards_grid">
                    {
                        productsList.map(
                            prod => <Card key={prod.id} {...prod} />
                        )
                    }
                </div>
            </InfiniteScroll>
        </>
    )
}
