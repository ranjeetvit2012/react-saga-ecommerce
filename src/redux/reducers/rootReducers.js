import { combineReducers } from 'redux'
import productReducers from "./productReducers";
import userReducer from './userReducer';
import { cartReducer } from './cartReducers';

const rootReducer = combineReducers({

  product: productReducers, // specific key name instead of the variable name
  user: userReducer,
  cart: cartReducer

})

export default rootReducer;