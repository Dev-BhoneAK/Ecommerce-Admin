 /**
 * @module categoryController
 */
const categoryService = require('../services/categoryService');

exports.getAllCategories = (req, res) => {
    const categories = categoryService.getAllCategories();
    res.send("Get all categories");
}

exports.getCategory = (req, res) => {
    const category = categoryService.getCategory();
    res.send("Get existing category ID");
}

exports.createCategory = (req, res) => {
    const createdCategory = categoryService.createCategory();
    res.send("Create new category");
}

exports.updateCategory = (req, res) => {
    const updatedCategory = categoryService.updateCategory();
    res.send("Update an existing category");
}

exports.deleteCategory = (req, res) => {
    const deletedCategory = categoryService.deleteCategory();
    res.send("Delete an existing category");
}