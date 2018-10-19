import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

// Regular Actions
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors,
  };
};

export const clearReviewErrors = errors => {
  return {
    type: CLEAR_REVIEW_ERRORS,
    errors,
  };
};

// Thunk Actions
export const fetchReviews = () => {
  return dispatch => {
    return ReviewAPIUtil.fetchReviews().then(reviews => {
      return dispatch(receiveReviews(reviews));
    });
  };
};

export const fetchReview = id => {
  return dispatch => {
    return ReviewAPIUtil.fetchReview(id).then(review => {
      return dispatch(receiveReview(review));
    });
  };
};

export const createReview = review => dispatch => (
  ReviewAPIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ))
);

export const updateReview = review => {
  return dispatch => {
    return ReviewAPIUtil.updateReview(review).then(review => {
      return dispatch(receiveReview(review));
    });
  };
};

export const deleteReview = reviewId => {
  return dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId).then(review => {
      return dispatch(removeReview(reviewId));
    });
  };
};
