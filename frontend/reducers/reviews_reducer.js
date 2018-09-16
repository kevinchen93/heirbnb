import merge from 'lodash/merge';

import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.reviews || {};
    case RECEIVE_BOOKING:
      return merge({}, state, { [action.review.id]: action.review });
    case REMOVE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
