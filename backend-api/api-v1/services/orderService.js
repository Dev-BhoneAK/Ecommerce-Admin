/**
 * @module orderService
 */
const orderDAL = require("../DAL/orderDAL");

exports.getAllOrders = async () => {
  const orders = await orderDAL.findAllOrders();
  const responseData = orders.map((order) => ({
    ...order._doc,
    orderItems: order.orderItems.map((orderItem, index) => ({
      ...orderItem,
      product: {
        ...orderItem.product,
        info: {
          ...orderItem.product.info,
          images: process.env.DOMAIN_URI + orderItem.product.info.images[0],
        },
      },
    })),
  }));
  return responseData;
};

exports.getOrder = async (orderId) => {
  const orders = await orderDAL.findOrderById(orderId);
  return orders;
};

exports.updateOrder = async (orderId, order) => {
  return await orderDAL.updateOrder(orderId, order);
};
