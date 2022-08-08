/**
 * @module productService
 */
const productDAL = require('../DAL/productDAL');

exports.getAllProducts = async () => {
    const products = await productDAL.findAllProducts();
    return products;
};

exports.getProduct =  async (productId) => {
    const products = await productDAL.findProductById(productId);
    return products;
};

exports.createProduct = async (product) => {
    return await productDAL.createProduct(product);;
}

exports.updateProduct = async (productId, product) => {
    return await productDAL.updateProduct(productId, product);
}

exports.deleteProduct = async (productId) => {
    return await productDAL.deleteProduct(productId);
}

/* Consumer Endpoint Start */
exports.getDiscountProducts = async () => {
    return await productDAL.getDiscountProducts();
}

exports.getNewArrivalProducts = async () => {
    return await productDAL.getNewArrivalProducts();
}

exports.getTrendingProducts = async () => {
    return await productDAL.getTrendingProducts();
}
/* Consumer Endpoint End */