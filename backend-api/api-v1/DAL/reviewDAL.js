const reviewModel = require('../models/reviewModel');
const Review = require("../models/reviewModel");

exports.findAllReviews = async () => {
    const reviews = await reviewModel.find();
    return reviews;
}

exports.findReviewById = async (reviewId) => {
    const review = await reviewModel.findById(reviewId);
    return review;
}

exports.deleteReview = async (reviewId) => {
    return await Review.findByIdAndDelete(reviewId);
}