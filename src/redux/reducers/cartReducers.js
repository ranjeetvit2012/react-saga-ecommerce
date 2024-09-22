
import { ADD_TO_CART, REMOVE_CART } from "../type/cartType"
const initialValues = {
    loader: false,
    cart: [],
    error: "",
}

export const cartReducer = (state = initialValues, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state?.cart, ...action.payload],
                loader: true
            }

        case REMOVE_CART:
            const removeCart = state?.cart?.filter((data) => data._id !== action.payload)
            return {
                ...state,
                cart: [...removeCart],
                loader: false
            }

        default:
            return {
                ...state
            }
    }

}