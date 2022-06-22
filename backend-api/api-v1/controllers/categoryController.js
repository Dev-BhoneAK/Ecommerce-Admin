 /**
 * @module categoryController
 */
const categoryService = require('../services/categoryService');
 const Category = require('../models/categoryModel');
 const mongoose = require('mongoose');

 exports.getAllCategories =  async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        !categories ? res.status(404).json({message: 'Category Not Found!'}) : res.status(200).json(categories);
    }catch (err) {
        res.status(500).json({message: err});
    }
};

exports.getCategory = async (req, res) => {
    // const categoryId = mongoose.Types.ObjectId(req.params['categoryId'].trim());;
    // const category = await Category.findById(categoryId);
    // console.log('Category ', category);
    try {
        const categoryId = req.params.categoryId;
        const category = await categoryService.getCategory(categoryId);

        !category ? res.status(404).json({message: 'Category Not Found!'}) : res.status(200).json(category);
    }catch (err) {
        res.status(500).json({message: err});
    }
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