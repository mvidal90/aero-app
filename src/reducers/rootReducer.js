import { combineReducers } from "redux";
import { productsListReducer } from "./productsListReducer";

export const rootReducer = combineReducers({
    list: productsListReducer,
})