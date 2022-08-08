const express = require("express");
const router = express.Router();

const reviewController = require("../../controllers/reviewController");

router.get("/", reviewController.getAllReviews);

router.get("/:reviewId", reviewController.getReview);

router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;
