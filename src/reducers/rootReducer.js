import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsListReducer } from "./productsListReducer";

export const rootReducer = combineReducers({
    list: productsListReducer,
    cart: cartReducer,
})