const express = require("express");
const router = express.Router();

const authController = require("../../controllers/authController");

router.post("/login", authController.login);

router.post("/refreshToken", authController.refreshToken);

module.exports = router;
