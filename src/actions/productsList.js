import { types } from "../types/types";

export const getProducts = (page = 1) => {
    return async (dispatch) => {
        const resp = await fetch(`https://challenge-api.aerolab.co/products?page=${page}`);
        const body = await resp.json();
        
        if (body.products.length) {
           dispatch(setProducts(body))
        } else {
          alert("Lo sentimos, algo fue mal...")
        }
    };
};

const setProducts = (list) => ({
    type: types.getProducts,
    payload: list,
});
