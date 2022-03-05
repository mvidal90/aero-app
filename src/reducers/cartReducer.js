import { types } from "../types/types";

const initialState = [];

export const cartReducer = ( state = initialState, action) => {
    
    switch ( action.type ) {
        case types.addToCart:
            return  [
                ...state,
                action.payload
            ]
        case types.updateCart:
            return  state.map( 
                item => item.id === action.payload.id ? 
                    action.payload 
                : 
                    item);
        case types.removeToCart:
            return  state.filter( item => item.id !== action.payload );
        case types.clearCart:
            return  [];
        default:
            return state;
    }

}
