import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';

// Regular Actions
export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing,
});

export const removeListing = listingId => ({
  type: REMOVE_LISTING,
  listingId,
});


// Thunk Actions
export const fetchListings = filters => {
  return dispatch => {
    return ListingAPIUtil.fetchListings(filters).then(listings => {
      return dispatch(receiveListings(listings));
    });
  };
};

export const fetchListing = id => {
  return dispatch => {
    return ListingAPIUtil.fetchListing(id).then(listing => {
      return dispatch(receiveListing(listing));
    });
  };
};

export const createListing = id => {
  return dispatch => {
    return ListingAPIUtil.createListing(id).then(listing => {
      return dispatch(receiveListing(listing));
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

export const deleteListing = listingId => {
  return dispatch => {
    return ListingAPIUtil.deleteListing(listingId).then(listing => {
      return dispatch(removeListing(listingId));
    });
  };
};
