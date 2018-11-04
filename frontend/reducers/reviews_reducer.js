import merge from 'lodash/merge';

import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import { REMOVE_BOOKING } from '../actions/booking_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews || {};
    case RECEIVE_REVIEW:
    debugger
      return merge({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_LISTING:
      return merge({}, state, action.reviews );
    default:
      return state;
  }
};

export default reviewsReducer;
