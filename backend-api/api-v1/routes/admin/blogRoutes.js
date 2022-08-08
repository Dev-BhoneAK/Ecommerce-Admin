const express = require("express");
const router = express.Router();
const { multiFileUpload } = require("../../middleware/fileUploadMiddleware");

const blogController = require("../../controllers/blogController");

router.get("/", blogController.getAllBlogs);

router.get("/:blogId", blogController.getBlog);

router.post("/", multiFileUpload, blogController.createBlog);

router.patch("/:blogId", multiFileUpload, blogController.updateBlog);

router.delete("/:blogId", blogController.deleteBlog);

module.exports = router;
