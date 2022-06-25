const express = require('express');
const router = express.Router();
const {fileUpload} = require('../middleware/fileUploadMiddleware');

const userController = require('../controllers/userController');

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getUser);

router.post("/", fileUpload, userController.createUser);

router.patch("/:userId", fileUpload, userController.updateUser);

router.delete("/:userId", userController.deleteUser);

module.exports = router;