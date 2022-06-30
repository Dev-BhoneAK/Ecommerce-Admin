import {API_URL} from "../../config/API";
import axios from 'axios';

const API = API_URL+"categories"

export const getAllCategories = async () => {
    return await axios.get(API);
}

export const createCategory = (category) => {
    console.log('Called saveReview with axios');
    return axios.post(API,category);
}