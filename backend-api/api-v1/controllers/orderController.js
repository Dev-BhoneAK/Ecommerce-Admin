/**
 * @module orderController
 */
const orderService = require("../services/orderService");
const asyncHandler = require("express-async-handler");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    // const orders = "";
    console.log("orders ", !!orders.length);
    if (!orders || !orders.length) {
      return res.status(400).json({ message: "Orders Not Found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: "Orders Not Found" });
  }
  // const orders = await orderService.getAllOrders();
  // const orders = "";
  // console.log("orders ", !!orders.length);
  // if (!orders || !orders.length) {
  //   res.status(400).json({ message: "Orders Not Found" });
  // }
  // res.status(200).json(orders);
};

exports.getOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;
  const order = await orderService.getOrder(orderId);
  if (!order) {
    res.status(404);
    throw new Error("Order Not Found");
  }
  res.status(200).json(order);
});

exports.updateOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;
  const order = req.body;
  order.logo = req.file.path;
  const updatedOrder = await orderService.updateOrder(orderId, order);
  if (!updatedOrder) {
    res.status(400);
    throw new Error("Cannot Update Order. Please check Input Fields");
  }
  res.status(200).json(updatedOrder);
});
