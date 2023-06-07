import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "./authAPI";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await getAllBlogsAPI();
  return response.data;
});

export const getBlogById = (state, blogId) =>
  state.blogItems.filter((blog) => blog._id === blogId)[0];

export const createBlog = createAsyncThunk(
  "auth/login",
  async (userCredentials) => {
    const response = await loginAPI(userCredentials);
    return response.data;
  }
);

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("Api fullfilled ", action.payload);
      state.userInfo = action.payload;
    });
  },
});

export default authSlice.reducer;
