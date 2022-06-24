const express = require('express');
const router = express.Router();
const categories = require('./categoryRoutes');
const brands = require('./brandRoutes');

router.use('/categories', categories);
router.use('/brands', brands);
module.exports = router;
