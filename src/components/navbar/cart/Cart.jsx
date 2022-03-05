import React from 'react';
import { useSelector } from 'react-redux';
import cartImg from '../../../assets/shopping-cart.png'
import { formateddAmount } from '../../../helpers/formattedAmmount';

export const Cart = () => {

    const { cart } = useSelector( state => state);
    const total = cart.reduce( (previus, current) => previus + current.price , 0)

    return (
        <div className="navbar__cart-container">
            <p className="navbar__cart-total">$ {formateddAmount(total)}</p>
            <div className="position-relative mr-2">
                <img src={cartImg} alt="Carrito de compras"/>
                <div className="navbar__cart-badge">
                    <span>{ cart.length }</span>
                </div>
            </div>
        </div>
    )
}
