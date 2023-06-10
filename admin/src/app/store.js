import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import blogReducer from "../features/blog/blogSlice";
import brandReducer from "../features/brand/brandSlice";
import categoryReducer from "../features/category/categorySlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product/productSlice";
import reviewReducer from "../features/product/reviewSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    brand: brandReducer,
    category: categoryReducer,
    order: orderReducer,
    product: productReducer,
    review: reviewReducer,
  },
});
