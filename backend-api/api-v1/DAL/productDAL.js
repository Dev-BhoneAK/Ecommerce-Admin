const productModel = require("../models/productModel");
const Product = require("../models/productModel");

exports.findAllProducts = async () => {
  const products = await productModel.find().sort({ createdAt: "desc" });
  return products;
};

exports.findProductById = async (productId) => {
  const product = await productModel.findById(productId);
  return product;
};

exports.createProduct = (product) => {
  const {
    name,
    sku,
    category,
    images,
    model,
    brand,
    description,
    basePrice,
    totalStockCount,
  } = product;
  const productObj = {
    info: { name, sku, category, images },
    detail: { model, description },
    pricing: { basePrice },
    totalStockCount,
  };
  const newProduct = new Product(productObj);
  return newProduct.save();
};

exports.updateProduct = async (productId, product) => {
  const {
    name,
    sku,
    category,
    images,
    model,
    brand,
    description,
    basePrice,
    totalStockCount,
  } = product;
  const productObj = {
    info: { name, sku, category, images },
    detail: { model, description },
    pricing: { basePrice },
    totalStockCount,
  };
  return await Product.findByIdAndUpdate(productId, productObj);
};

exports.deleteProduct = async (productId) => {
  return await Product.findByIdAndDelete(productId);
};
