import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "brands";

export const getAllBrandsAPI = async () => {
  return await axios.get(API);
};

export const saveBrandAPI = async (brand) => {
  try {
    const responseData = await axios.post(API, brand, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return responseData;
  } catch (err) {
    console.log("err ", err);
  }
};

export const updateBrandAPI = async (brandId, brand) => {
  const responseData = await axios.patch(API + `/${brandId}`, brand);
  return responseData;
};

export const deleteBrandAPI = async (brandId) => {
  const responseData = await axios.delete(API + `/${brandId}`);
  return responseData;
};
