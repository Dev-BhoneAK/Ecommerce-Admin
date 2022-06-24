 /**
 * @module categoryController
 */
const categoryService = require('../services/categoryService');
const asyncHandler = require('express-async-handler');

 exports.getAllCategories =  async (req, res) => {
     const categories = await categoryService.getAllCategories();
     if(!categories){
         res.status(404);
         throw new Error('Categories Not Found');
     }
     res.status(200).json(categories);
 };

 exports.getCategory = asyncHandler (async (req, res) => {
     const categoryId = req.params.categoryId;
     const category = await categoryService.getCategory(categoryId);
     if(!category){
         res.status(404);
         throw new Error('Category Not Found');
     }
     res.status(200).json(category);
 });

exports.createCategory = asyncHandler ( async (req, res) => {
    const category = req.body;
    const newCategory = await categoryService.createCategory(category);
    if(!newCategory){
        res.status(400);
        throw new Error('Cannot Create New Category. Please check Input Fields');
    }
    res.status(200).json(newCategory);
});

exports.updateCategory = asyncHandler (async (req, res) => {
    const categoryId = req.params.categoryId;
    const category = req.body;
    const updatedCategory = await categoryService.updateCategory(categoryId, category);
    if(!updatedCategory){
        res.status(400);
        throw new Error('Cannot Update Category. Please check Input Fields');
    }
    res.status(200).json(updatedCategory);
});

exports.deleteCategory = asyncHandler(async (req, res) => {
    const categoryId = req.params.categoryId;
    const deletedCategory = await categoryService.deleteCategory(categoryId);
    if(!deletedCategory){
        res.status(400);
        throw new Error('Removing category is not successful. Please Try again.');
    }
    res.status(200).json(deletedCategory);
});