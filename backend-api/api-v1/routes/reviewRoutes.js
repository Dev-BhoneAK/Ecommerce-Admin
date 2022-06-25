const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');

router.get("/", reviewController.getAllReviews);

router.get("/:reviewId", reviewController.getReview);

router.post("/", reviewController.createReview);

router.patch("/:reviewId", reviewController.updateReview);

router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;