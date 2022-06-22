/**
 * @module categoryService
 */
const asyncHandler = require('express-async-handler');
const categoryDAL = require('../DAL/categoryDAL');

exports.getAllCategories = asyncHandler(async () => {
    const categories = await categoryDAL.findAllCategories();
    return categories;
});

exports.getCategory = asyncHandler( async (categoryId) => {
    const categories = await categoryDAL.findCategoryById(categoryId);
    return categories;
});

exports.createCategory = () => {
    return;
}

exports.updateCategory = () => {
    return;
}

exports.deleteCategory = () => {
    return;
}