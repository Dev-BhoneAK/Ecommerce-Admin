import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllBrandsAPI,
  saveBrandAPI,
  updateBrandAPI,
  deleteBrandAPI,
} from "./brandAPI";

const initialState = {
  brandItems: [],
  loadingStatus: "idle",
};

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const response = await getAllBrandsAPI();
  return response.data;
});

// export const getBrandById =  (state, brandId) => state.brandItems.filter(brand => brand._id === brandId);

export const createBrand = createAsyncThunk(
  "brands/createBrand",
  async (brand) => {
    const response = await saveBrandAPI(brand);
    return response.data;
  }
);

export const updateBrand = createAsyncThunk(
  "brands/updateBrand",
  async (brand) => {
    const { id, brandFields } = brand;
    const response = await updateBrandAPI(id, brandFields);
    return response.data;
  }
);

export const deleteBrand = createAsyncThunk(
  "brands/deleteBrand",
  async (brandId) => {
    console.log("arrive delete brand");
    const response = await deleteBrandAPI(brandId);
    return response.data;
  }
);

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
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brandItems = [action.payload, ...state.brandItems];
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.brandItems = state.brandItems.map((brand) =>
          brand._id == action.payload._id ? action.payload : brand
        );
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.brandItems = state.brandItems.filter(
          (brand) => brand._id != action.payload._id
        );
      });
  },
});

console.log(brandSlice);

export default brandSlice.reducer;
