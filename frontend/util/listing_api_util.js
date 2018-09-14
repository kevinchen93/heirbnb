export const fetchListings = data => {
  return $.ajax({
    method: 'POST',
    url: 'api/listings',
    data
  });
};

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`,
    data
  });
};

export const createListing = listing => {
  return $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: { listing }
  });
};

export const updateListing = listing => {
  return $.ajax({
    method: 'PATCH',
    url: `api/listings/${listing.id}`,
    data: { listing }
  });
};

export const deleteListing = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/listings/${id}`
  });
};
