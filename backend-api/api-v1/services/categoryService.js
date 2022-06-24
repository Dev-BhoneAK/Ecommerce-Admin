/**
 * @module categoryService
 */
const categoryDAL = require('../DAL/categoryDAL');

exports.getAllCategories = async () => {
    const categories = await categoryDAL.findAllCategories();
    return categories;
};

exports.getCategory =  async (categoryId) => {
    const categories = await categoryDAL.findCategoryById(categoryId);
    return categories;
};

exports.createCategory = async (category) => {
    return await categoryDAL.createCategory(category);;
}

exports.updateCategory = async (categoryId, category) => {
    return await categoryDAL.updateCategory(categoryId, category);
}

exports.deleteCategory = async (categoryId) => {
    return await categoryDAL.deleteCategory(categoryId);
}