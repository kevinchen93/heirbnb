import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_NEW_LISTING = 'RECEIVE_NEW_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';

// Regular Actions
export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = ( { listing, reviews, users } ) => ({
  type: RECEIVE_LISTING,
  listing,
  reviews,
  users
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

// Thunk Actions
export const fetchListings = () => {
  return dispatch => {
    return ListingAPIUtil.fetchListings().then(payload => {
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

export const createListing = listing => {
  return dispatch => {
    return ListingAPIUtil.createListing(listing).then(listing => {
      return dispatch(receiveNewListing(listing));
    });
  };
};

export const updateListing = listing => {
  return dispatch => {
    return ListingAPIUtil.updateListing(listing).then(listing => {
      return dispatch(receiveListing(listing));
    });
  };
};

export const deleteListing = listing => {
  return dispatch => {
    return ListingAPIUtil.deleteListing(listing).then(listing => {
      return dispatch(removeListing(listing));
    });
  };
};
