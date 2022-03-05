import React from 'react'

export const ItemCounter = ({ isProductInCart, increment, decrement, counter}) => {
    return (
        <div className="card__buttons-container">
            {
                isProductInCart ?
                    <div className="card__counter-container">
                        <button className="card__buttons-counter" onClick={ decrement }>
                            -
                        </button>
                        <span>{counter}</span>
                        <button className="card__buttons-counter"  onClick={ increment }>
                            +
                        </button>
                    </div>
                : 
                    <button className="card__button-add-item" onClick={ increment }>
                        Agregar al carrito
                    </button>
            }
        </div>
    )
}
