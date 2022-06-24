/**
 * @module brandService
 */
const brandDAL = require('../DAL/brandDAL');

exports.getAllBrands = async () => {
    const brands = await brandDAL.findAllBrands();
    return brands;
};

exports.getBrand =  async (brandId) => {
    const brands = await brandDAL.findBrandById(brandId);
    return brands;
};

exports.createBrand = async (brand) => {
    return await brandDAL.createBrand(brand);;
}

exports.updateBrand = async (brandId, brand) => {
    return await brandDAL.updateBrand(brandId, brand);
}

exports.deleteBrand = async (brandId) => {
    return await brandDAL.deleteBrand(brandId);
}