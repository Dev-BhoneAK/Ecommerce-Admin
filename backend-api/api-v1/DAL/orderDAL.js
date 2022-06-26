const orderModel = require('../models/orderModel');
const Order = require("../models/orderModel");

exports.findAllOrders = async () => {
    const orders = await orderModel.find();
    return orders;
}

exports.findOrderById = async (orderId) => {
    const order = await orderModel.findById(orderId);
    return order;
}

exports.updateOrder = async (orderId, order) => {
    return  await Order.findByIdAndUpdate(orderId, order);
}