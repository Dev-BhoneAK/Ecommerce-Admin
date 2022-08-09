const express = require('express');
const router = express.Router();

const blogController = require('../../controllers/blogController');

router.get('/latest', blogController.getLatestBlogs);
// router.get('/new-arrival', productController.getNewArrivalProducts);
// router.get('/trending', productController.getTrendingProducts);

module.exports = router;