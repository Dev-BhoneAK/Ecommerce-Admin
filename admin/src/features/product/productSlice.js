import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {getAllProductsAPI, saveProductAPI, updateProductAPI, deleteProductAPI} from './productAPI';

const initialState = {
    productItems: [],
    loadingStatus: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {

    const response = await getAllProductsAPI();
    return response.data;
});

export const getProductById =  (state, productId) => state.productItems.filter(product => product._id === productId);

export const createProduct = createAsyncThunk('products/createProduct', async product => {
    const response = await saveProductAPI(product);
    return response.data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async product => {
    const {id, productFields} = product;
    const response = await updateProductAPI(id, productFields);
    return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async productId => {
    console.log('arrive delete product');
    const response = await deleteProductAPI(productId);
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loadingStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log("Api fullfilled ",action.payload);
                state.productItems = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.productItems = [action.payload, ...state.productItems];
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.productItems = state.productItems.map(product =>
                    product._id == action.payload._id ? action.payload : product
                );
            })
            .addCase(deleteProduct.fulfilled, (state, action)=> {
                state.productItems = state.productItems.filter(product => product._id != action.payload._id);
            })
    }
});

console.log(productSlice);

export default productSlice.reducer;