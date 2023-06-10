import { API_URL } from "../../config/API";
import axios from "axios";

export const loginAPI = async (userCredentials) => {
  try {
    const responseData = await axios.post(
      API_URL + "auth/login",
      userCredentials
    );
    console.log("responseData ", responseData);
    return responseData;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
