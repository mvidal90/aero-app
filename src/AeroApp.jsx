import React from 'react';
import { Provider } from 'react-redux';
import { CardsGrid } from './components/cards/CardsGrid';
import { NavBar } from './components/navbar/NavBar';
import { store } from './store/store';

export const AeroApp = () => {

    return (
        <Provider store={store}>
            <NavBar />
            <div className="wrapper">
                <h2>Almacén</h2>
            </div>
            <CardsGrid />
        </Provider>
    )
}
