const mongoose = require("mongoose");
const Product = require("./productModel");
const User = require("./userModel");

const orderSchema = mongoose.Schema(
  {
    orderInfo: {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: Product,
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: mongoose.Decimal128, required: true },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    payment: {
      method: {
        type: String,
        required: true,
      },
      result: {
        id: { type: String },
        email: { type: String },
        status: { type: String },
        update_time: { type: String },
      },
      isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
      },
    },
    tracking: {
      status: String,
      deliveredAt: { type: Date },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
