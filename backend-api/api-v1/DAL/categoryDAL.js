/**
 * @module categoryDAL
 */
const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

exports.findAllCategories = asyncHandler(async () => {
    const categories = await Category.find();
    return categories;
})

exports.findCategoryById = asyncHandler(async (categoryId) => {
    const category = await Category.findById(categoryId);
    console.log('Category ', category);
    return category;
})