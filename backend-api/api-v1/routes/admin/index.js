const express = require("express");
const router = express.Router();
const brands = require("./brandRoutes");
const blogs = require("./blogRoutes");
const categories = require("./categoryRoutes");
const products = require("./productRoutes");
const orders = require("./orderRoutes");
const reviews = require("./reviewRoutes");
const auth = require("./authRoutes");
const { adminAuth } = require("../../middleware/authMiddleware");

router.use("/brands", adminAuth, brands);
router.use("/blogs", adminAuth, blogs);
router.use("/categories", adminAuth, categories);
router.use("/products", adminAuth, products);
router.use("/orders", orders);
router.use("/reviews", adminAuth, reviews);
router.use("/auth", auth);

module.exports = router;
