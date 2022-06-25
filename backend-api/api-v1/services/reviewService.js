/**
 * @module reviewService
 */
const reviewDAL = require('../DAL/reviewDAL');

exports.getAllReviews = async () => {
    const reviews = await reviewDAL.findAllReviews();
    return reviews;
};

exports.getReview =  async (reviewId) => {
    const reviews = await reviewDAL.findReviewById(reviewId);
    return reviews;
};

exports.deleteReview = async (reviewId) => {
    return await reviewDAL.deleteReview(reviewId);
}