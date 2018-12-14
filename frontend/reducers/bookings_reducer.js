import merge from 'lodash/merge';

import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING
} from '../actions/booking_actions';

import { RECEIVE_REVIEW } from '../actions/review_actions.js';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings || {};
    case RECEIVE_BOOKING:
      return merge({}, state, { [action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    case RECEIVE_REVIEW:
      newState = merge({}, state);
      newState[action.review.booking_id]['review'] = action.review;
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
