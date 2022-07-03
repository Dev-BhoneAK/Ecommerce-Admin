import {API_URL} from "../../config/API";
import axios from 'axios';

const API = API_URL+"categories"

export const getAllCategoriesAPI = async () => {
    return await axios.get(API);
}

export const saveCategoryAPI = async (category) => {
    const responseData = await axios.post(API,category);
    return responseData;
}

export const updateCategoryAPI = async (categoryId, category) => {
    const responseData = await axios.patch(API+`/${categoryId}`,category);
    return responseData;
}

export const deleteCategoryAPI = async (categoryId) => {
    const responseData = await axios.delete(API+`/${categoryId}`);
    return responseData;
}