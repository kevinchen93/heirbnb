export const fetchListings = filters => {
  console.log('THIS IS THE DATA BEING SENT UP', filters);
  return $.ajax({
    method: 'GET',
    url: 'api/listings',
    data: { filters: filters }
  });
};

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
