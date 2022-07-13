import { API_URL } from "../../config/API";
import axios from "axios";

const API = API_URL + "blogs";

export const getAllBlogsAPI = async () => {
  return await axios.get(API);
};

export const saveBlogAPI = async (blog) => {
  try {
    const responseData = await axios.post(API, blog, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return responseData;
  } catch (err) {
    console.log("err ", err);
  }
};

export const updateBlogAPI = async (blogId, blog) => {
  const responseData = await axios.patch(API + `/${blogId}`, blog, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return responseData;
};

export const deleteBlogAPI = async (blogId) => {
  const responseData = await axios.delete(API + `/${blogId}`);
  return responseData;
};
