/**
 * @module orderController
 */
const orderService = require('../services/orderService');
const asyncHandler = require('express-async-handler');

exports.getAllOrders =  async (req, res) => {
    const orders = await orderService.getAllOrders();
    if(!orders){
        res.status(404);
        throw new Error('Orders Not Found');
    }
    res.status(200).json(orders);
};

exports.getOrder = asyncHandler (async (req, res) => {
    const orderId = req.params.orderId;
    const order = await orderService.getOrder(orderId);
    if(!order){
        res.status(404);
        throw new Error('Order Not Found');
    }
    res.status(200).json(order);
});

exports.updateOrder = asyncHandler (async (req, res) => {
    const orderId = req.params.orderId;
    const order = req.body;
    order.logo = req.file.path;
    const updatedOrder = await orderService.updateOrder(orderId, order);
    if(!updatedOrder){
        res.status(400);
        throw new Error('Cannot Update Order. Please check Input Fields');
    }
    res.status(200).json(updatedOrder);
});