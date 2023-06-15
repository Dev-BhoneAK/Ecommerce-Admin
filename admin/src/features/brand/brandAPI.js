import { API_URL } from "../../config/API";
import jwtInterceoptor from "../../utility/jwtInterceptor";
const API = API_URL + "brands";

export const getAllBrandsAPI = async () => {
  return await jwtInterceoptor.get(API);
};

export const saveBrandAPI = async (brand) => {
  try {
    const responseData = await jwtInterceoptor.post(API, brand, {
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
  const responseData = await jwtInterceoptor.patch(API + `/${brandId}`, brand);
  return responseData;
};

export const deleteBrandAPI = async (brandId) => {
  const responseData = await jwtInterceoptor.delete(API + `/${brandId}`);
  return responseData;
};
