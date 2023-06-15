import { API_URL } from "../../config/API";
import axios from "axios";

export const loginAPI = async (userCredentials) => {
  try {
    const responseData = await axios.post(
      API_URL + "auth/login",
      userCredentials
    );
    return responseData;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const logoutAPI = async () => {
  try {
    const responseData = await axios.post(API_URL + "auth/logout");
    return responseData;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
