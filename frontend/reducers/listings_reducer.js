import merge from 'lodash/merge';

import { RECEIVE_LISTINGS, RECEIVE_LISTING, RECEIVE_NEW_LISTING, REMOVE_LISTING } from '../actions/listing_actions';
import { REMOVE_BOOKING } from '../actions/booking_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newListing;
  let newState;
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings || {};
    case RECEIVE_LISTING:
      newListing = { [action.listing.id]: action.listing };
      return merge({}, state, newListing);
    case RECEIVE_NEW_LISTING:
      newListing = { [action.listing.id]: action.listing };
      return merge({}, state, newListing);
    case REMOVE_LISTING:
      newState = merge({}, state);
      delete newState[action.listingId];
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
