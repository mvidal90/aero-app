import { removeDuplicates } from "../helpers/removeDuplictes";
import { types } from "../types/types";

const initialState = {
    lastPage: null,
    productsList: []
}

export const productsListReducer = ( state = initialState, action) => {
    
    switch ( action.type ) {
        case types.getProducts:
            return {
                lastPage: action.payload.page_count,
                productsList: [
                    ...state.productsList,
                    ...action.payload.products,
                ]
            }
        default:
            return state;
    }

}
