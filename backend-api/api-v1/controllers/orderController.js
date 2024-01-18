/**
 * @module orderController
 */
const orderService = require("../services/orderService");
const asyncHandler = require("express-async-handler");
const { throwCustomError } = require("../utility/helpers");

exports.getAllOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getAllOrders();
  if (Array.isArray(orders) && orders.length > 0) {
    res.status(200).json({ status: "success", data: orders });
  } else {
    throwCustomError("Orders Not Found", 200);
  }
});

exports.getOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;
  const order = await orderService.getOrder(orderId);
  if (!order) {
    throwCustomError("Order Not Found", 200);
  }
  res.status(200).json({ status: "success", data: order });
});

exports.updateOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;
  const order = req.body;
  order.logo = req.file.path;
  const updatedOrder = await orderService.updateOrder(orderId, order);
  if (!updatedOrder) {
    throwCustomError("Cannot Update Order. Please check Input Fields", 400);
  }
  res.status(200).json({ status: "success", data: updatedOrder });
});
