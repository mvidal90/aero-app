import React from 'react';
import cart from '../../../assets/shopping-cart.png'

export const Cart = () => {
  return (
    <div className="navbar__cart-container">
        <p className="navbar__cart-total">$ 1000,00</p>
        <div className="position-relative mr-2">
            <img src={cart} alt="Carrito de compras"/>
            <div className="navbar__cart-badge">
                <span>12</span>
            </div>
        </div>
    </div>
  )
}
