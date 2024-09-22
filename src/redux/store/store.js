
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducers/rootReducers";
import rootSaga from "../saga/rootSaga"

//const store = createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware()
const store  = configureStore({ 
  reducer: rootReducer,
  middleware: [sagaMiddleware],
} 
  )
// createStore(
//     rootReducer,
//   applyMiddleware(sagaMiddleware)
// )
sagaMiddleware.run(rootSaga)



  export default store;