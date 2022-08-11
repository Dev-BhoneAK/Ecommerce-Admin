import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "blogs";

export const getAllBlogsAPI = async () => {
    return await axios.get(API + '/all');
};

