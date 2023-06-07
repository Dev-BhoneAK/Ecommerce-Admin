import { API_URL } from "../../config/API";
import axios from "axios";

export const loginAPI = async (userCredentials) => {
  try {
    const responseData = await axios.post(API_URL + "login", userCredentials);
    return responseData;
  } catch (err) {
    console.log("err ", err);
  }
};
