import { types } from "../types/types";

export const addToCart = (item) => ({
    type: types.addToCart,
    payload: item,
});

export const updateCart = (item) => ({
    type: types.updateCart,
    payload: item,
});

export const removeToCart = (id) => ({
    type: types.updateToCart,
    payload: id,
});

export const clearCart = () => ({
    type: types.clearCart,
});
