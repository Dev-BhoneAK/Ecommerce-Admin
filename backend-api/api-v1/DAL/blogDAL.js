const blogModel = require('../models/blogModel');
const Blog = require("../models/blogModel");

exports.findAllBlogs = async () => {
    const blogs = await blogModel.find();
    return blogs;
}

exports.findBlogById = async (blogId) => {
    const blog = await blogModel.findById(blogId);
    return blog;
}

exports.createBlog = (blog) => {
    const newBlog = new Blog(blog);
    return newBlog.save();
}

exports.updateBlog = async (blogId, blog) => {
    return  await Blog.findByIdAndUpdate(blogId, blog);
}

exports.deleteBlog = async (blogId) => {
    return await Blog.findByIdAndDelete(blogId);
}