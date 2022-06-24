const brandModel = require('../models/brandModel');
const Brand = require("../models/brandModel");

exports.getAllBrands = async () => {
    const brands = await brandModel.find();
    return brands;
}

exports.getBrand = async (brandId) => {
    const brand = await brandModel.findById(brandId);
    return brand;
}

exports.createBrand = (brand) => {
    const newBrand = new Brand(brand);
    return newBrand.save();
}

exports.updateBrand = async (brandId, brand) => {
    return await Brand.findByIdAndUpdate(brandId, brand);
}

exports.deleteBrand = async (brandId) => {
    return await Brand.findByIdAndDelete(brandId);
}