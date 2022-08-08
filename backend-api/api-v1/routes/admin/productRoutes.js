const express = require('express');
const router = express.Router();
const {multiFileUpload} = require('../../middleware/fileUploadMiddleware');

const productController = require('../../controllers/productController');

router.get("/", productController.getAllProducts);

router.get("/:productId", productController.getProduct);

router.post("/", multiFileUpload, productController.createProduct);

router.patch("/:productId", multiFileUpload, productController.updateProduct);

router.delete("/:productId", productController.deleteProduct);

module.exports = router;