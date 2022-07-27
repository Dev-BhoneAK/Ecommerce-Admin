exports.ordersData = [
  {
    orderInfo: {
      id: "123456",
      status: "request",
    },
    orderItems: [
      {
        quantity: 2,
        price: 123.99,
      },
      {
        quantity: 1,
        price: 123.99,
      },
      {
        quantity: 2,
        price: 123.99,
      },
    ],
    payment: {
      method: "cash_on_delivery",
      result: {
        status: "unpaid",
      },
    },
    isPaid: false,
  },
  {
    orderInfo: {
      id: "789123",
      status: "request",
    },
    orderItems: [
      {
        quantity: 3,
        price: 456.99,
      },
      {
        quantity: 2,
        price: 48.99,
      },
    ],
    payment: {
      method: "digital_wallet",
      result: {
        status: "unpaid",
      },
    },
    isPaid: false,
  },
  {
    orderInfo: {
      id: "456789",
      status: "request",
    },
    orderItems: [
      {
        quantity: 1,
        price: 999.99,
      },
    ],
    payment: {
      method: "paypal",
      result: {
        status: "unpaid",
      },
    },
    isPaid: true,
  },
];
