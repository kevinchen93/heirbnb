import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LISTING, RECEIVE_NEW_LISTING, REMOVE_LISTING } from '../actions/listing_actions';
import { RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';

const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState;
  let newCurrentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, { [action.user.id]: action.user });
      return newState;
    case RECEIVE_LISTING:
      return merge({}, state, action.users);
    case RECEIVE_NEW_LISTING:
      newCurrentUser = merge({}, state[action.listing.host_id]);
      newCurrentUser.listing_ids.push(action.listing.id);
      newCurrentUser.listings.push(action.listing.id);
      return merge({}, state, { [action.listing.host_id]: newCurrentUser });
    case REMOVE_LISTING:
      newState = merge({}, state);
      newState[action.hostId].listing_ids = newState[action.hostId].listing_ids.filter( id => id !== action.listingId );
      newState[action.hostId].listings = newState[action.hostId].listings.filter( id => id !== action.listingId );
      return newState;
    case RECEIVE_BOOKING:
      newCurrentUser = merge({}, state[action.booking.guest_id]);
      newCurrentUser.booking_ids.push(action.booking.id);
      newCurrentUser.bookings.push(action.booking.id);
      return merge({}, state, { [action.booking.guest_id]: newCurrentUser });
    case REMOVE_BOOKING:
      newState = merge({}, state);
      newState[action.guestId].booking_ids = newState[action.guestId].booking_ids.filter( id => id !== action.bookingId);
      newState[action.guestId].bookings = newState[action.guestId].bookings.filter( id => id !== action.bookingId);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
