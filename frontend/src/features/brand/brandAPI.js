import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "brands";

export const getAllBrandsAPI = async () => {
    return await axios.get(API + '/all');
};
