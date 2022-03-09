import React from 'react';
import brandImage from '../../../assets/Combined Shape 2@3x.png'

export const Brand = () => {
  return (
    <div className="navbar__brand">
        <img src={brandImage} alt="Isologo Ezshop" className="navbar__brand-iso"/>
        <h1 className="navbar__brand-text1 ml-2">Ez</h1>
        <h1 className="navbar__brand-text2">shop</h1>
    </div>
  )
}
