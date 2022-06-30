import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {getAllCategories, createCategory} from './categoryAPI';

const initialState = {
    categoryItems: [],
    loadingStatus: 'idle',
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {

    const response = await getAllCategories();
    return response.data;
});

export const createCategory = createAsyncThunk('categories/createCategory', async category => {
    console.log("API SaveReview");
    const response = await createCategory(category);

    console.log("Save Review JSON ",response.data);
    return response.data;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // omit reducer cases
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.loadingStatus = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                console.log("Api fullfilled ",action.payload);
                state.categoryItems = action.payload;
                state.loadingStatus = 'idle';
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                state.categoryItems = [...state.categoryItems,action.payload];
        })
    }
});

console.log(categorySlice);

export default categorySlice.reducer;