import {ALL_PRODUCT_REQUESTS,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL, CLEAR_ERRORS } from '../constant/productConstants'


export const productReducer = (state= {},action) =>{

    switch (action.type){
        case ALL_PRODUCT_REQUESTS:
            return {loading:true,products:[]}
        case ALL_PRODUCT_SUCCESS:
            // console.log("payload : ",action.payload)
            // console.log("products : ",action)
            return {loading:false,products:action.payload,productsCount:action.products.productsCount}
        case ALL_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
        case CLEAR_ERRORS:
            return {...state,error:null}
        default:
            return state
    }
     
}