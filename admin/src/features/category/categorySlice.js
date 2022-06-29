import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {getAllCategories} from './categoryAPI';

const initialState = {
    categoryItems: [],
    loadingStatus: 'idle',
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {

    const response = await getAllCategories();
    return response.data;
})

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
    }
});

console.log(categorySlice);

export default categorySlice.reducer;