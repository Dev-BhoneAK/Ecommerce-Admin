/**
 * @module categoryDAL
 */
const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

exports.findAllCategories = async () => {
    const categories = await Category.find();
    return categories;
}

exports.findCategoryById = async (categoryId) => {
    const category = await Category.findById(categoryId);
    return category;
}

exports.createCategory = (category) => {
    const newCategory = new Category(category);
    return newCategory.save();
}

exports.updateCategory = async (categoryId, category) => {
    return await Category.findByIdAndUpdate(categoryId, category);
}

exports.deleteCategory = async (categoryId) => {
    return await Category.findByIdAndDelete(categoryId);
}