import React from 'react';
import { Card } from './components/cards/Card';
import { CardsGrid } from './components/cards/CardsGrid';
import { NavBar } from './components/navbar/NavBar';

export const AeroApp = () => {
    return (
        <>
            <NavBar />
            <h2 className="mx-3">Almacén</h2>
            <CardsGrid />
        </>
    )
}
