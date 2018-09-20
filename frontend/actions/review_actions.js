import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

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

// Thunk Actions
export const fetchReviews = () => {
  return dispatch => {
    return ReviewAPIUtil.fetchReviews(filters).then(reviews => {
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

export const createReview = review => {
  return dispatch => {
    return ReviewAPIUtil.createReview(review).then(review => {
      return dispatch(receiveReview(review));
    });
  };
};

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
