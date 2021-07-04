import { FETCH_USER_FAILED, 
    FETCH_USER_REQUEST, 
    FETCH_USER_SUCCESS } from "./action_types"
import axios from 'axios'


export function  FetchUserRequest(){
    return{
        type: FETCH_USER_REQUEST,
    }
}

export function FetchUserSuccess(products){
    return{
        type:FETCH_USER_SUCCESS,
        payload:products
    }
}

export function FetchUserFailed(error){
    return{
        type: FETCH_USER_FAILED,
        payload:error
    }
}

export const fetchProducts = ()=>{
    return (dispatch) => {
        dispatch(FetchUserRequest())
        axios.get("https://607e95f802a23c0017e8ba2f.mockapi.io/habib-shoplane")
        .then(response => {
            const products = response.data;
            dispatch(FetchUserSuccess(products))
        })

        .catch(error =>{
            const errorMessage = error.errorMessage
            dispatch(FetchUserFailed(errorMessage))
        })
    }
}