import React from 'react';
import img from '../../assets/Bitmap@2x.png'
import { ItemCounter } from './ItemCounter';

export const Card = () => {
  return (
    <div className="card_container">
        <img src={img} alt="" className="card_img-product" />
        <h3 className="card_title-product">Caldo Wilde</h3>
        <div className="d-flex center-box w-100 my-2">
            <span className="card_old-price">$ 300,00</span>
            <span className="card_new-price">$ 300,00</span>
        </div>
        <ItemCounter />
    </div>
  )
}
