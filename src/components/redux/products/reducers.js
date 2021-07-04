import { FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./action_types";


const initialProductState = {
    loading: false,
    products: [],
    error: ""
}

export const ProductReducer = (state=initialProductState, action )=> {
    switch (action.type) {
        case FETCH_USER_REQUEST: return{
            ...state,
            loading:true,
        }

        case FETCH_USER_SUCCESS: return{
            ...state,
            loading:false,
            products:action.payload
        }

        case FETCH_USER_FAILED: return{
            ...state,
            loading:false,
            products:[],
            error:action.payload
        }
            
        default: return state
            
    }
}