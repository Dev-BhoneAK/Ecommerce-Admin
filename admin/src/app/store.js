import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from '../features/category/categorySlice';

export default configureStore({
    reducer: {
        category: categoryReducer
    },
})