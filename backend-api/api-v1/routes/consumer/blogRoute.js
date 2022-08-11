const express = require('express');
const router = express.Router();

const blogController = require('../../controllers/blogController');

// router.get('/latest', blogController.getLatestBlogs);
router.get('/all', blogController.getAllBlogs);

module.exports = router;