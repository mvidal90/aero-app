import React from 'react'
import { Brand } from './brand/Brand'
import { Cart } from './cart/Cart'

export const NavBar = () => {
    return (
        <nav>
            <div className="navbar__container">
                <div className="navbar__wrapper">
                    <Brand />
                    <Cart />
                </div>
            </div>
        </nav>
    )
}
