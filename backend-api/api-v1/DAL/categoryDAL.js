/**
 * @module categoryDAL
 */
const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

exports.findAllCategories = async () => {
    const categories = await Category.find().sort({'createdAt': 'desc'});
    return categories;
}

exports.findCategoryById = async (categoryId) => {
    const category = await Category.findById(categoryId);
    return category;
}

exports.createCategory = async (category) => {
    console.log('Category ', category);
    const newCategory = new Category(category);
    return await newCategory.save();
}

exports.updateCategory = async (categoryId, category) => {
    return await Category.findByIdAndUpdate(categoryId, category);
}

exports.deleteCategory = async (categoryId) => {
    return await Category.findByIdAndDelete(categoryId);
}