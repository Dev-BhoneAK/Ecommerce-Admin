/**
 * @module blogController
 */
const blogService = require("../services/blogService");
const asyncHandler = require("express-async-handler");

exports.getAllBlogs = async (req, res) => {
  const blogs = await blogService.getAllBlogs();
  if (!blogs) {
    res.status(404);
    throw new Error("Blogs Not Found");
  }
  res.status(200).json(blogs);
};

exports.getBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;
  const blog = await blogService.getBlog(blogId);
  if (!blog) {
    res.status(404);
    throw new Error("Blog Not Found");
  }
  res.status(200).json(blog);
});

exports.createBlog = asyncHandler(async (req, res) => {
  const imagePathArr = [];
  req.files.map((file) => imagePathArr.push(file.path));
  const blog = req.body;
  blog.images = imagePathArr;
  const newBlog = await blogService.createBlog(blog);
  if (!newBlog) {
    res.status(400);
    throw new Error("Cannot Create New Blog. Please check Input Fields");
  }
  res.status(200).json(newBlog);
});

exports.updateBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;
  const blog = req.body;
  blog.logo = req.file.path;
  const updatedBlog = await blogService.updateBlog(blogId, blog);
  if (!updatedBlog) {
    res.status(400);
    throw new Error("Cannot Update Blog. Please check Input Fields");
  }
  res.status(200).json(updatedBlog);
});

exports.deleteBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;
  const deletedBlog = await blogService.deleteBlog(blogId);
  if (!deletedBlog) {
    res.status(400);
    throw new Error("Removing blog is not successful. Please Try again.");
  }
  res.status(200).json(deletedBlog);
});
