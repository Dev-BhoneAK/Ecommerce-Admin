import {API_URL} from "../../config/API";
import axios from 'axios';

const API = API_URL+"categories"

export const getAllCategoriesAPI = async () => {
    return await axios.get(API);
}

export const saveCategoryAPI = async (category) => {
    // try {
        const responseData = await axios.post(API,category);
        return responseData;
    // }catch(err) {
    //     console.error(err);
    // }
}

export const updateCategoryAPI = async (categoryId, category) => {
    try {
        const responseData = await axios.patch(API+`/${categoryId}`,category);
        return responseData;
    }catch(err) {
        console.error(err);
    }
}

export const deleteCategoryAPI = async (categoryId) => {
    try {
        const responseData = await axios.delete(API+`/${categoryId}`);
        return responseData;
    }catch(err) {
        console.error(err);
    }
}