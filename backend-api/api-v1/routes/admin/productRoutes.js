const express = require('express');
const router = express.Router();
const {multiFileUpload} = require('../../middleware/fileUploadMiddleware');

const productController = require('../../controllers/productController');

/* Admin Dashboard Routes Start */
router.get("/", productController.getAllProducts);

router.get("/:productId", productController.getProduct);

router.post("/", multiFileUpload, productController.createProduct);

router.patch("/:productId", multiFileUpload, productController.updateProduct);

router.delete("/:productId", productController.deleteProduct);
/* Admin Dashboard Routes End */

/* Consumer Routes Start */
router.get("/main-slider", productController.getMainSliderProduct);
router.route('/category/:category').get(getProductByCategory);
/* Consumer Routes End */

module.exports = router;