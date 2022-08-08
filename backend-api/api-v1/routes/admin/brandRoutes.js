const express = require('express');
const router = express.Router();
const {fileUpload} = require('../../middleware/fileUploadMiddleware');

const brandController = require('../../controllers/brandController');

router.get("/", brandController.getAllBrands);

router.get("/:brandId", brandController.getBrand);

router.post("/", fileUpload, brandController.createBrand);

router.patch("/:brandId", fileUpload, brandController.updateBrand);

router.delete("/:brandId", brandController.deleteBrand);

module.exports = router;