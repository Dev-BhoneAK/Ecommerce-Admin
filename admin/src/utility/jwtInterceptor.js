import axios from "axios";
import { API_URL } from "../config/API";
axios.defaults.withCredentials = true;

const jwtInterceoptor = axios.create({ withCredentials: true });

jwtInterceoptor.interceptors.request.use((config) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  config.headers.common["Authorization"] = `bearer ${userInfo}`;
  return config;
});

jwtInterceoptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 400) {
      console.log("error.response.data.message ", error.response.data.message);
      let apiResponse = await axios.post(API_URL + "auth/refreshtoken");

      const userInfo = JSON.stringify(apiResponse.data);
      console.log("New Access Token ", userInfo);
      localStorage.setItem("userInfo", userInfo);
      const newUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      error.config.headers["Authorization"] = `bearer ${newUserInfo}`;
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);
export default jwtInterceoptor;
