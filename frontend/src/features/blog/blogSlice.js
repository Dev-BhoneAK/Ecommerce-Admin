import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllBlogsAPI,
} from "./blogAPI";

const initialState = {
    blogItems: [],
    loadingStatus: "idle",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
    const response = await getAllBlogsAPI();
    return response.data;
});

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.loadingStatus = "loading";
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                console.log("Api fullfilled ", action.payload);
                state.blogItems = action.payload;
                state.loadingStatus = "idle";
            })
    },
});

export default blogSlice.reducer;
