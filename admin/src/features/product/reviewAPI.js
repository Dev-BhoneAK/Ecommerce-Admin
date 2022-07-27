import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "reviews";

export const getAllReviewsAPI = async () => {
  return await axios.get(API);
};

export const deleteReviewAPI = async (reviewId) => {
  const responseData = await axios.delete(API + `/${reviewId}`);
  return responseData;
};
