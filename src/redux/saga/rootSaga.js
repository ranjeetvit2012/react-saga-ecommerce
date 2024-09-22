import { productSaga } from "./productSaga";
import {  spawn } from 'redux-saga/effects'
import { userSaga } from "./userSaga";

export default function* rootSaga() {
    yield spawn(productSaga)
    yield spawn(userSaga)
  
  }