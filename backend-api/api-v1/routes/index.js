const express = require('express');
const router = express.Router();
const categories = require('./categoryRoutes');

router.use('/categories', categories);

module.exports = router;
