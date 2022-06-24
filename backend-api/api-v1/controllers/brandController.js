/**
 * @module brandController
 */
const brandService = require('../services/brandService');
const asyncHandler = require('express-async-handler');

exports.getAllBrands =  async (req, res) => {
    const brands = await brandService.getAllBrands();
    if(!brands){
        res.status(404);
        throw new Error('Brands Not Found');
    }
    res.status(200).json(brands);
};

exports.getBrand = asyncHandler (async (req, res) => {
    const brandId = req.params.brandId;
    const brand = await brandService.getBrand(brandId);
    if(!brand){
        res.status(404);
        throw new Error('Brand Not Found');
    }
    res.status(200).json(brand);
});

exports.createBrand = asyncHandler ( async (req, res) => {
    const brand = req.body;
    brand.logo = req.file.path;
    // console.log('Request File ', req.file.path);
    console.log('Brand Body ', brand);
    const newBrand = await brandService.createBrand(brand);
    if(!newBrand){
        res.status(400);
        throw new Error('Cannot Create New Brand. Please check Input Fields');
    }
    res.status(200).json(newBrand);
});

exports.updateBrand = asyncHandler (async (req, res) => {
    const brandId = req.params.brandId;
    const brand = req.body;
    const updatedBrand = await brandService.updateBrand(brandId, brand);
    if(!updatedBrand){
        res.status(400);
        throw new Error('Cannot Update Brand. Please check Input Fields');
    }
    res.status(200).json(updatedBrand);
});

exports.deleteBrand = asyncHandler(async (req, res) => {
    const brandId = req.params.brandId;
    const deletedBrand = await brandService.deleteBrand(brandId);
    if(!deletedBrand){
        res.status(400);
        throw new Error('Removing brand is not successful. Please Try again.');
    }
    res.status(200).json(deletedBrand);
});