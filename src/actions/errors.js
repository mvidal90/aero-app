import { types } from "../types/types";

export const setError = (err) => ({
    type: types.setError,
    payload: err,
});

export const clearError = () => ({
    type: types.clearError,
});
