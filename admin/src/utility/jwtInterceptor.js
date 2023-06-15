import axios from "axios";
import { API_URL } from "../config/API";
import { logout } from "../features/auth/authSlice";

axios.defaults.withCredentials = true;

let store;

export const injectStore = (_store) => {
  store = _store;
};

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
      try {
        let apiResponse = await axios.post(API_URL + "auth/refreshtoken");

        const userInfo = JSON.stringify(apiResponse.data);
        console.log("New Access Token ", userInfo);
        localStorage.setItem("userInfo", userInfo);
        const newUserInfo = JSON.parse(localStorage.getItem("userInfo"));
        error.config.headers["Authorization"] = `bearer ${newUserInfo}`;
        return axios(error.config);
      } catch (err) {
        console.log("refresh token error ", err);
        await store.dispatch(logout());
      }
    } else {
      throw new Error(error.response.data.message);
    }
  }
);
export default jwtInterceoptor;
