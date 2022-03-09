import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { errorsReducer } from "./errorsReducer";
import { productsListReducer } from "./productsListReducer";

export const rootReducer = combineReducers({
    list: productsListReducer,
    cart: cartReducer,
    errors: errorsReducer,
})