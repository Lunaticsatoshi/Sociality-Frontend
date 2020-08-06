import { SET_ERRORS, CLEAR_ERRORS, LOADIND_UI } from "../types";

const initialState = {
    loading: false,
    errors: null
};

export default function (state = initialState, action){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            };
        case LOADIND_UI:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}