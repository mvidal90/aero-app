import React from 'react';
import { ItemCounter } from './ItemCounter';

export const Card = ({ photo, name, price, originalPrice }) => {

  const formateddAmount = (amount) => amount.toFixed(2, 10).replace(".", ",");

  return (
    <div className="card_container">
        <img src={photo} alt="" className="card_img-product" />
        <h3 className="card_title-product">{name}</h3>
        <div className="d-flex center-box w-100 my-2">
            { originalPrice > price && <span className="card_old-price">$ {formateddAmount(originalPrice)}</span>}
            <span className="card_new-price">$ {formateddAmount(price)}</span>
        </div>
        <ItemCounter />
    </div>
  )
}
