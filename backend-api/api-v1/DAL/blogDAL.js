const { default: mongoose } = require("mongoose");
const blogModel = require("../models/blogModel");
const productModel = require("../models/productModel");

exports.findAllBlogs = async () => {
  const blogs = await blogModel.find().sort({ publishedDate: -1 });
  return blogs;
};

exports.qfindBlogById = async (blogId) => {
  if (!mongoose.Types.ObjectId.isValid(blogId)) {
    return null;
  }
  const blog = await blogModel.findById(blogId);
  return blog;
};

exports.createBlog = (blog) => {
  const newBlog = new blogModel(blog);
  return newBlog.save();
};

exports.updateBlog = async (blogId, blog) => {
  return await blogModel.findByIdAndUpdate(blogId, blog);
};

exports.deleteBlog = async (blogId) => {
  return await blogModel.findByIdAndDelete(blogId);
};

/* Consumer Endpoint Start */
exports.getLatestBlogs = async () => {
  return await blogModel.find().sort({ createdAt: "desc" }).limit(3);
};
/* Consumer Endpoint End */
