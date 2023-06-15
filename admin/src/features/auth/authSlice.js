import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, logoutAPI } from "./authAPI";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const login = createAsyncThunk("auth/login", async (userCredentials) => {
  const response = await loginAPI(userCredentials);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await logoutAPI();
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const userInfo = JSON.stringify(action.payload);
      state.userInfo = userInfo;
      localStorage.setItem("userInfo", userInfo);
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    });
  },
});

export default authSlice.reducer;
