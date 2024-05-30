import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/slice'
import { productReducer } from '../reducers/productReducer';
let store ={};
export default store = configureStore({
  reducer: {
    counter: counterReducer,
    products:productReducer
  },
})