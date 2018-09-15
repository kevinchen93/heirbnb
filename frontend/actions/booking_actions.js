import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

// Regular Actions
export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
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

export const fetchBooking = id => {
  return dispatch => {
    return BookingAPIUtil.fetchBooking(id).then(booking => {
      return dispatch(receiveBooking(booking));
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

export const updateBooking = booking => {
  return dispatch => {
    return BookingAPIUtil.updateBooking(booking).then(booking => {
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
