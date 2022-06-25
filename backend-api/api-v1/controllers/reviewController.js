/**
 * @module reviewController
 */
const reviewService = require('../services/reviewService');
const asyncHandler = require('express-async-handler');

exports.getAllReviews =  async (req, res) => {
    const reviews = await reviewService.getAllReviews();
    if(!reviews){
        res.status(404);
        throw new Error('Reviews Not Found');
    }
    res.status(200).json(reviews);
};

exports.getReview = asyncHandler (async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await reviewService.getReview(reviewId);
    if(!review){
        res.status(404);
        throw new Error('Review Not Found');
    }
    res.status(200).json(review);
});

exports.deleteReview = asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId;
    const deletedReview = await reviewService.deleteReview(reviewId);
    if(!deletedReview){
        res.status(400);
        throw new Error('Removing review is not successful. Please Try again.');
    }
    res.status(200).json(deletedReview);
});