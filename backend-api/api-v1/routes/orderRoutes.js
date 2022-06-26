const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.get("/", orderController.getAllOrders);

router.get("/:orderId", orderController.getOrder);

router.patch("/:orderId", orderController.updateOrder);

module.exports = router;