import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllOrdersAPI,
  saveOrderAPI,
  updateOrderAPI,
  deleteOrderAPI,
} from "./orderAPI";

const initialState = {
  orderItems: [],
  loadingStatus: "idle",
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await getAllOrdersAPI();
  return response.data;
});

export const getOrderById = (state, orderId) =>
  state.orderItems.filter((order) => order._id === orderId)[0];

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (order) => {
    const response = await saveOrderAPI(order);
    return response.data;
  }
);

export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async (order) => {
    try {
      const { id, formData } = order;
      const response = await updateOrderAPI(id, formData);
      return response.data;
    } catch (e) {
      console.log("error is ", e);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (orderId) => {
    console.log("arrive delete order");
    const response = await deleteOrderAPI(orderId);
    return response.data;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state, action) => {
        state.loadingStatus = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        console.log("Api fullfilled ", action.payload);
        state.orderItems = action.payload;
        state.loadingStatus = "idle";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderItems = [action.payload, ...state.orderItems];
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.orderItems = state.orderItems.map((order) =>
          order._id == action.payload._id ? action.payload : order
        );
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orderItems = state.orderItems.filter(
          (order) => order._id != action.payload._id
        );
      });
  },
});

console.log(orderSlice);

export default orderSlice.reducer;
