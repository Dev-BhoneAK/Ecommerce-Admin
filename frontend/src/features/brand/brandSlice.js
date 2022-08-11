import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllBrandsAPI,
} from "./brandAPI";

const initialState = {
    brandItems: [],
    loadingStatus: "idle",
};

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
    const response = await getAllBrandsAPI();
    return response.data;
});

const brandSlice = createSlice({
    name: "brands",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state, action) => {
                state.loadingStatus = "loading";
            })
            .addCase(fetchBrands.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.brandItems = action.payload;
                state.loadingStatus = "idle";
            })
    },
});

console.log(brandSlice);

export default brandSlice.reducer;
