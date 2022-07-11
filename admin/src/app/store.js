import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "../features/brand/brandSlice";
import categoryReducer from "../features/category/categorySlice";
import productReducer from "../features/product/productSlice";
import blogReducer from "../features/blog/blogSlice";

export default configureStore({
  reducer: {
    brand: brandReducer,
    category: categoryReducer,
    product: productReducer,
    blog: blogReducer,
  },
});
