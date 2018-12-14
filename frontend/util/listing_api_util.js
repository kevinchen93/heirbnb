export const fetchListings = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/listings',
    data
  });
};

export const fetchSplashListings = cities => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: { city: cities }
  })
);

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`,
  });
};

export const createListing = listing => {
  return $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: { listing: listing }
  });
};

export const updateListing = listing => {
  return $.ajax({
    method: 'PATCH',
    url: `api/listings/${listing.id}`,
    data: { listing: listing }
  });
};

export const deleteListing = listing => {
  return $.ajax({
    method: 'DELETE',
    url: `api/listings/${listing.id}`,
    data: { listing: listing }
  });
};
