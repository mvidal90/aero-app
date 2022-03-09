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
        case types.clearList:
            return initialState
        default:
            return state;
    }

}
