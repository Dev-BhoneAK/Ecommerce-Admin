import { API_URL } from "../../config/API";
import jwtInterceoptor from "../../utility/jwtInterceptor";

const API = API_URL + "blogs";

export const getAllBlogsAPI = async () => {
  return await jwtInterceoptor.get(API);
};

export const saveBlogAPI = async (blog) => {
  try {
    const responseData = await jwtInterceoptor.post(API, blog, {
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
  const responseData = await jwtInterceoptor.patch(API + `/${blogId}`, blog, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return responseData;
};

export const deleteBlogAPI = async (blogId) => {
  const responseData = await jwtInterceoptor.delete(API + `/${blogId}`);
  return responseData;
};
