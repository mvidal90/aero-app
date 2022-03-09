import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, removeToCart, updateCart } from '../../actions/cart';
import { formateddAmount } from '../../helpers/formattedAmmount';
import { useCounter } from '../../hooks/useCounter';
import { ItemCounter } from './ItemCounter';

export const Card = ({ id, photo, name, price, originalPrice }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector( state => state );
    const productInCart = cart.find( prod => prod.id === id);
    const { counter, increment, decrement } = useCounter(0);

    useEffect(() => {
        if (productInCart) {
            if (counter === 0) {
                dispatch(removeToCart(id));
            } else {
                dispatch(updateCart({
                    id, 
                    photo, 
                    name, 
                    price, 
                    originalPrice,
                    quantity: counter
                }));
            }
        } else if (counter !== 0) {
            dispatch(addToCart({
                id, 
                photo, 
                name, 
                price, 
                originalPrice,
                quantity: counter
            }));
        }
    }, [counter,  dispatch, id, name, originalPrice, photo, price, productInCart])

    return (
        <div className="card_container">
            <div className="center-box d-flex">
                <img src={photo} alt="" className="card_img-product" />
            </div>
            <h3 className="card_title-product">{name}</h3>
            <div className="d-flex center-box w-100 my-2">
                    { originalPrice > price && <span className="card_old-price">$ {formateddAmount(originalPrice)}</span>}
                    <span className="card_new-price">$ {formateddAmount(price)}</span>
            </div>
            <ItemCounter 
                counter={counter}
                increment={increment}
                decrement={decrement}
                isProductInCart={productInCart?.quantity}
            />
        </div>
  )
}
