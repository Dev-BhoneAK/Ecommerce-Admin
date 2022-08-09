/**
 * @module blogService
 */
const blogDAL = require("../DAL/blogDAL");

exports.getAllBlogs = async () => {
  const blogs = await blogDAL.findAllBlogs();
  const responseData = blogs.map((blog) => ({
    ...blog._doc,
    images: process.env.DOMAIN_URI + blog.images,
  }));
  return responseData;
};

exports.getBlog = async (blogId) => {
  const blogs = await blogDAL.findBlogById(blogId);
  return blogs;
};

exports.createBlog = async (blog) => {
  return await blogDAL.createBlog(blog);
};

exports.updateBlog = async (blogId, blog) => {
  return await blogDAL.updateBlog(blogId, blog);
};

exports.deleteBlog = async (blogId) => {
  return await blogDAL.deleteBlog(blogId);
};

/* Consumer Endpoint Start */
exports.getLatestBlogs = async () => {
  const blogs = await blogDAL.getLatestBlogs();
  return blogs;
};
/* Consumer Endpoint End */

