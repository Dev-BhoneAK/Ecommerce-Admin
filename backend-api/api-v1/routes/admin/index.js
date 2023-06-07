const express = require("express");
const router = express.Router();
const brands = require("./brandRoutes");
const blogs = require("./blogRoutes");
const categories = require("./categoryRoutes");
const products = require("./productRoutes");
const orders = require("./orderRoutes");
const reviews = require("./reviewRoutes");
const auth = require("./authRoutes");

router.use("/brands", brands);
router.use("/blogs", blogs);
router.use("/categories", categories);
router.use("/products", products);
router.use("/orders", orders);
router.use("/reviews", reviews);
router.use("/auth", auth);

module.exports = router;
