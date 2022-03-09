import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { CardsGrid } from './components/cards/CardsGrid';
import { NavBar } from './components/navbar/NavBar';
import { store } from './store/store';

export const AeroApp = () => {

    return (
        <Provider store={store}>
            <NavBar />
            <h2 className="mx-3">Almacén</h2>
            <CardsGrid />
        </Provider>
    )
}
