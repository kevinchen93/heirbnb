export const fetchBookings = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookings',
    data
  });
};

export const createBooking = listing => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: { listing }
  });
};

export const deleteBooking = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${id}`
  });
};
