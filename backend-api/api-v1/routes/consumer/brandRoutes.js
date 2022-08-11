const express = require('express');
const router = express.Router();

const brandController = require('../../controllers/brandController');

router.get('/all', brandController.getAllBrands);

module.exports = router;