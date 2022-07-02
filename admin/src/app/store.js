import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from '../features/category/categorySlice';
import productReducer from '../features/product/productSlice';

export default configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer
    },
})