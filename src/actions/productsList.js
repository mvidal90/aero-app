import { types } from "../types/types";
import { clearError, setError } from "./errors";

export const getProducts = (page = 1) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${process.env.REACT_APP_URL_API}/products/${page}`);
            const body = await resp.json();
            
            if (body.ok) {
                if (page === 1) {
                    dispatch(clearList());
                }
                dispatch(clearError());
                dispatch(setProducts(body));
                const pageStorage = parseInt(localStorage.getItem("page")) || 0;
                const products = JSON.parse(localStorage.getItem("products")) || [];
                if (pageStorage < page && products.length < 60 ) {
                    const bodyProducts = body?.products || [];
                    localStorage.setItem("products", JSON.stringify([...products, ...bodyProducts]));
                    localStorage.setItem("number_page", body.page);
                }
            } else {
                throw Error(body.msg)
            }
        } catch (err) {
            dispatch(setError({
                error: true,
                msg: "No logramos tener conexión.. :(",
            }));
            const pageStorage = parseInt(localStorage.getItem("page"));
            const products = JSON.parse(localStorage.getItem("products"));
            if (products) {
                dispatch(clearList());
                dispatch(setProducts({
                    products,
                    page_count: pageStorage
                }));
            }
        }
    };
};

const setProducts = (list) => ({
    type: types.getProducts,
    payload: list,
});

const clearList = () => ({
    type: types.clearList,
});
