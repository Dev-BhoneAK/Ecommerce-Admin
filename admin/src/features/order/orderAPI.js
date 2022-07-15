import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "orders";

export const getAllOrdersAPI = async () => {
  return await axios.get(API);
};

export const saveOrderAPI = async (order) => {
  // try{
  const responseData = await axios.post(API, order, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return responseData;
  // }catch (e) {
  //     console.log('error ', e);
  // }
};

export const updateOrderAPI = async (orderId, order) => {
  const responseData = await axios.patch(API + `/${orderId}`, order, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return responseData;
};

export const deleteOrderAPI = async (orderId) => {
  const responseData = await axios.delete(API + `/${orderId}`);
  return responseData;
};
