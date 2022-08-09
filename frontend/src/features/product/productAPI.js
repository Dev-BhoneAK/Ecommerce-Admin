import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "products";

export const getAllProductsAPI = async () => {
    return await axios.get(API);
};

export const saveProductAPI = async (product) => {
    // try{
    const responseData = await axios.post(API, product, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });
    return responseData;
    // }catch (e) {
    //     console.log('error ', e);
    // }
};

export const updateProductAPI = async (productId, product) => {
    const responseData = await axios.patch(API + `/${productId}`, product, {
        headers: {
            "content-type": "multipart/form-data",
        },
    });
    return responseData;
};

export const deleteProductAPI = async (productId) => {
    const responseData = await axios.delete(API + `/${productId}`);
    return responseData;
};
