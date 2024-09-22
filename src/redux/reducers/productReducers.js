
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST } from "../type/productType"
const initialState = {
    loader:false,
    status:"",
    message:"",
    data:[],
    error:"",
}

const productReducers = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loader: true,
                error: "",
                status: "",
                message: ""
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loader: false,
                status: action?.productData?.status,
                error: "",
                message: action.productData?.message,
                
            }
        case PRODUCT_LIST_SUCCESS:
            // console.log("products -------reducer", action.productData)
            return {
                ...state,
                data: action?.productData?.data,
                loader: false,
                error: "",
                status: ""

            }
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loader: true,
                error: "",
                status: ""
            }

        case PRODUCT_LIST_ERROR:
            return {
                ...state,
                loader: true,
                error: action.productData
            }

        default:
            return { ...state }
    }

}

export default productReducers;