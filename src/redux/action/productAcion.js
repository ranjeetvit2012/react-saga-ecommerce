
import { ADD_PRODUCT_REQUEST, PRODUCT_LIST_REQUEST } from "../type/productType";



export const addProductRequestAction = (data) => {
    return {
        type: ADD_PRODUCT_REQUEST,
        payload: data
    }
}


export const productList = () => {
    return {
        type: PRODUCT_LIST_REQUEST,
    }
}