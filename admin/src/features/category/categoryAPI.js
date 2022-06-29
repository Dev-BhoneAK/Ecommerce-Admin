import {API_URL} from "../../config/API";
import axios from 'axios';

const API = API_URL+"categories"

export const getAllCategories = async () => {
    console.log('Called getAllCategories with axios');
    return await axios.get(API);
}