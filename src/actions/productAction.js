import axios from "axios";
import {ALL_PRODUCT_REQUESTS,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL, CLEAR_ERRORS } from '../constant/productConstants'


export const getProduct = () => async (dispatch) => {
    try{
        dispatch({
            type:ALL_PRODUCT_REQUESTS
        })

        let {data} = await axios.get('/api/v1/products')
    //    console.log(data);
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
    }catch(error){
        // console.log("error : ",error);
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}


const clearAllError = () => async (dispatch) => {
    dispatch({
        type:CLEAR_ERRORS
    })
}