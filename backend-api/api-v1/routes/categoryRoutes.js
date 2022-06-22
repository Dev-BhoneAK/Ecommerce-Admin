const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get("/", categoryController.getAllCategories);

router.get("/:categoryId", categoryController.getCategory);
//
// router.post("/", categoryController.createCategory);
//
// router.patch("/:categoryId", categoryController.updateCategory);
//
// router.delete("/:categoryId", categoryController.deleteCategory);

module.exports = router;