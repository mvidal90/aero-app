import React from 'react'

export const ItemCounter = (quantity = 0) => {
    return (
        <div className="card__buttons-container">
            {
                !quantity ?
                    <button className="card__button-add-item">
                        Agregar al carrito
                    </button>
                : 
                    <div className="card__counter-container">
                        <button className="card__buttons-counter">
                            -
                        </button>
                        <span>2</span>
                        <button className="card__buttons-counter">
                            +
                        </button>
                    </div>
            }
        </div>
    )
}
