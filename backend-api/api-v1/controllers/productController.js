/**
 * @module productController
 */
const productService = require('../services/productService');
const asyncHandler = require('express-async-handler');

exports.getAllProducts =  async (req, res) => {
    const products = await productService.getAllProducts();
    if(!products){
        res.status(404);
        throw new Error('Products Not Found');
    }
    res.status(200).json(products);
};

exports.getProduct = asyncHandler (async (req, res) => {
    const productId = req.params.productId;
    const product = await productService.getProduct(productId);
    if(!product){
        res.status(404);
        throw new Error('Product Not Found');
    }
    res.status(200).json(product);
});

exports.createProduct = asyncHandler ( async (req, res) => {
    const product = req.file;
    // product.logo = req.file.path;
    console.log('Product Body ', product);
    res.status(200).json({status: 'good one'});
    // const newProduct = await productService.createProduct(product);
    // if(!newProduct){
    //     res.status(400);
    //     throw new Error('Cannot Create New Product. Please check Input Fields');
    // }
    // res.status(200).json(newProduct);
});

exports.updateProduct = asyncHandler (async (req, res) => {
    const productId = req.params.productId;
    const product = req.body;
    product.logo = req.file.path;
    const updatedProduct = await productService.updateProduct(productId, product);
    if(!updatedProduct){
        res.status(400);
        throw new Error('Cannot Update Product. Please check Input Fields');
    }
    res.status(200).json(updatedProduct);
});

exports.deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.productId;
    const deletedProduct = await productService.deleteProduct(productId);
    if(!deletedProduct){
        res.status(400);
        throw new Error('Removing product is not successful. Please Try again.');
    }
    res.status(200).json(deletedProduct);
});