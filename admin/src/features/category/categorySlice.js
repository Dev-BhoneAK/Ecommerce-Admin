import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {getAllCategoriesAPI, saveCategoryAPI, updateCategoryAPI, deleteCategoryAPI} from './categoryAPI';

const initialState = {
    categoryItems: [],
    loadingStatus: 'idle',
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {

    const response = await getAllCategoriesAPI();
    return response.data;
});

// export const getCategoryById =  (state, categoryId) => state.categoryItems.filter(category => category._id === categoryId);

export const createCategory = createAsyncThunk('categories/createCategory', async category => {
    const response = await saveCategoryAPI(category);
    return response.data;
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async category => {
    const {id, categoryFields} = category;
    const response = await updateCategoryAPI(id, categoryFields);
    return response.data;
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async categoryId => {
    const response = await deleteCategoryAPI(categoryId);
    return response.data;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
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
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.categoryItems = state.categoryItems.map(category =>
                    category._id == action.payload._id ? action.payload : category
                );
            })
            .addCase(deleteCategory.fulfilled, (state, action)=> {
                state.categoryItems = state.categoryItems.filter(category => category._id != action.payload._id);
            })
    }
});

console.log(categorySlice);

export default categorySlice.reducer;