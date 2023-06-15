import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBlogsAPI,
  saveBlogAPI,
  updateBlogAPI,
  deleteBlogAPI,
} from "./blogAPI";

const initialState = {
  blogItems: [],
  loadingStatus: "idle",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await getAllBlogsAPI();
  return response.data;
});

export const getBlogById = (state, blogId) =>
  state.blogItems.filter((blog) => blog._id === blogId)[0];

export const createBlog = createAsyncThunk("blogs/createBlog", async (blog) => {
  const response = await saveBlogAPI(blog);
  return response.data;
});

export const updateBlog = createAsyncThunk("blogs/updateBlog", async (blog) => {
  try {
    const { id, formData } = blog;
    const response = await updateBlogAPI(id, formData);
    return response.data;
  } catch (e) {
    console.log("error is ", e);
  }
});

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (blogId) => {
    console.log("arrive delete blog");
    const response = await deleteBlogAPI(blogId);
    return response.data;
  }
);

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
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogItems = [action.payload, ...state.blogItems];
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.blogItems = state.blogItems.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        );
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogItems = state.blogItems.filter(
          (blog) => blog._id !== action.payload._id
        );
      });
  },
});

console.log(blogSlice);

export default blogSlice.reducer;
