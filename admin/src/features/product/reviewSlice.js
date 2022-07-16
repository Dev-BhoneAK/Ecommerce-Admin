import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllReviewsAPI, deleteReviewAPI } from "./reviewAPI";

const initialState = {
  reviewItems: [],
  loadingStatus: "idle",
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const response = await getAllReviewsAPI();
    return response.data;
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (reviewId) => {
    console.log("arrive delete review");
    const response = await deleteReviewAPI(reviewId);
    return response.data;
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state, action) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        console.log("Api fullfilled ", action.payload);
        state.reviewItems = action.payload;
        state.loadingStatus = "idle";
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviewItems = state.reviewItems.filter(
          (review) => review._id != action.payload._id
        );
      });
  },
});

console.log(reviewSlice);

export default reviewSlice.reducer;
