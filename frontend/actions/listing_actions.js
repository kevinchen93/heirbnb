import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_NEW_LISTING = 'RECEIVE_NEW_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS';
export const CLEAR_LISTING_ERRORS = 'CLEAR_LISTING_ERRORS';

// Regular Actions
export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = ( { listing, reviews, users, booked_dates } ) => ({
  type: RECEIVE_LISTING,
  listing,
  reviews,
  users,
  booked_dates
});

export const receiveNewListing = ( { listing, reviews, users } ) => {
  return {
  type: RECEIVE_NEW_LISTING,
  listing,
  reviews,
  users
  };
};

export const removeListing = ( { listing, reviews, users } ) => ({
  type: REMOVE_LISTING,
  listingId: listing.id,
  hostId: listing.host_id
});

export const receiveListingErrors = errors => {
  return {
    type: RECEIVE_LISTING_ERRORS,
    errors,
  };
};

export const clearListingErrors = errors => {
  return {
    type: CLEAR_LISTING_ERRORS,
    errors,
  };
};

// Thunk Actions
export const fetchListings = (filters) => {
  return dispatch => {
    console.log('THIS IS THE FILTER FROM THE THUNK ACTIONNNNN', filters);
    return ListingAPIUtil.fetchListings(filters).then(payload => {
      return dispatch(receiveListings(payload));
    });
  };
};

export const fetchListing = id => {
  return dispatch => {
    return ListingAPIUtil.fetchListing(id).then(data => {
      return dispatch(receiveListing(data));
    });
  };
};

export const createListing = listing => dispatch => (
  ListingAPIUtil.createListing(listing).then(listing => (
    dispatch(receiveNewListing(listing))
  ), err => (
    dispatch(receiveListingErrors(err.responseJSON))
  ))
);

export const updateListing = listing => dispatch => (
  ListingAPIUtil.updateListing(listing).then(listing => (
    dispatch(receiveListing(listing))
  ), err => (
    dispatch(receiveListingErrors(err.responseJSON))
  ))
);

export const deleteListing = listing => {
  return dispatch => {
    return ListingAPIUtil.deleteListing(listing).then(listing => {
      return dispatch(removeListing(listing));
    });
  };
};
