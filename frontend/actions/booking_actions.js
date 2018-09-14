import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

// Regular Actions
export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId,
});

// Thunk Actions
export const fetchBookings = () => {
  return dispatch => {
    return BookingAPIUtil.fetchBookings(filters).then(bookings => {
      return dispatch(receiveBookings(bookings));
    });
  };
};

export const createBooking = id => {
  return dispatch => {
    return BookingAPIUtil.createBooking(id).then(booking => {
      return dispatch(receiveBooking(booking));
    });
  };
};

export const deleteBooking = bookingId => {
  return dispatch => {
    return BookingAPIUtil.deleteBooking(bookingId).then(booking => {
      return dispatch(removeBooking(bookingId));
    });
  };
};
