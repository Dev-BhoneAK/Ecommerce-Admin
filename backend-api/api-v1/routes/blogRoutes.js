const express = require('express');
const router = express.Router();
const {fileUpload} = require('../middleware/fileUploadMiddleware');

const blogController = require('../controllers/blogController');

router.get("/", blogController.getAllBlogs);

router.get("/:blogId", blogController.getBlog);

router.post("/", fileUpload, blogController.createBlog);

router.patch("/:blogId", fileUpload, blogController.updateBlog);

router.delete("/:blogId", blogController.deleteBlog);

module.exports = router;