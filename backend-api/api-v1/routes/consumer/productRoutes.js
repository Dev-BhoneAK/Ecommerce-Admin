const express = require('express');
const router = express.Router();

const productController = require('../../controllers/productController');

// router.get("/main-slider", productController.getMainSliderProducts);
router.get('/discount', productController.getDiscountProducts);
router.get('/new-arrival', productController.getNewArrivalProducts);
router.get('/trending', productController.getTrendingProducts);

module.exports = router;