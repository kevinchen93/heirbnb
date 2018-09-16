import merge from 'lodash/merge';

import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings || {};
    case RECEIVE_BOOKING:
      return merge({}, state, { [action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;