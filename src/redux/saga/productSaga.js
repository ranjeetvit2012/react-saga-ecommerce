import { ADD_PRODUCT_ERROR, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_REQUEST, PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../type/productType'
import { call, put, takeEvery } from 'redux-saga/effects'
import { apiCall } from '../../utils/Utils'

export function* productList() {
  // try {
  //   const products = yield call(apiCall, 'GET', '/user/product-list', false);
  //   const productData = products?.data;
  //   if (products?.data?.status == 200) {

  //     yield put({ type: PRODUCT_LIST_SUCCESS, productData })
  //   } else {

  //     yield put({ type: PRODUCT_LIST_ERROR, productData })
  //   }

  // }
  // catch (error) {
  //   yield put({ type: PRODUCT_LIST_ERROR, error })
  // }
}

export function* addProduct(data) {
  try {
    const products = yield call(apiCall, 'POST', '/user/create-product', data.payload, true);
    const productData = products?.data;
    if (products?.data?.status == 201) {
      yield put({ type: ADD_PRODUCT_SUCCESS, productData })
    } else {
      yield put({ type: ADD_PRODUCT_ERROR, productData })
    }

  } catch (error) {
    yield put({ type: ADD_PRODUCT_ERROR, error })
  }
}

export function* productSaga() {

  yield takeEvery(PRODUCT_LIST_REQUEST, productList)
  yield takeEvery(ADD_PRODUCT_REQUEST, addProduct)

}
