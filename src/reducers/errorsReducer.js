import { types } from "../types/types";

const initialState = {
    error: false,
    msg: ''
}

export const errorsReducer = ( state = initialState, action) => {
    
    switch ( action.type ) {
        case types.setError:
            return {
                ...action.payload
            }
        case types.clearError:
            return initialState;
        default:
            return state;
    }

}
