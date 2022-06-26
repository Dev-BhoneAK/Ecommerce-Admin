/**
 * @module orderService
 */
const orderDAL = require('../DAL/orderDAL');

exports.getAllOrders = async () => {
    const orders = await orderDAL.findAllOrders();
    return orders;
};

exports.getOrder =  async (orderId) => {
    const orders = await orderDAL.findOrderById(orderId);
    return orders;
};

exports.updateOrder = async (orderId, order) => {
    return await orderDAL.updateOrder(orderId, order);
}