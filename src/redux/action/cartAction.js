
import { ADD_TO_CART, REMOVE_CART } from "../type/cartType"
export const addToCartAction = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}


export const removeCart = (id) => {
    return {
        type: REMOVE_CART,
        payload: id
    }
}