const productModel = require('../models/productModel');
const Product = require("../models/productModel");

exports.findAllProducts = async () => {
    const products = await productModel.find();
    return products;
}

exports.findProductById = async (productId) => {
    const product = await productModel.findById(productId);
    return product;
}

exports.createProduct = (product) => {
    const newProduct = new Product(product);
    return newProduct.save();
}

exports.updateProduct = async (productId, product) => {
    return  await Product.findByIdAndUpdate(productId, product);
}

exports.deleteProduct = async (productId) => {
    return await Product.findByIdAndDelete(productId);
}