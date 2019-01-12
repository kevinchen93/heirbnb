import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

/* export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
*/

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

// Regular Actions
export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

/*

export const fetchBookingsSuccess = payload => ({
  type: FETCH_BOOKINGS_SUCCESS,
  payload,
});

*/

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

export const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const clearBookingErrors = () => {
  return {
    type: CLEAR_BOOKING_ERRORS
  };
};

// Thunk Actions

/*

export const fetchBookingsStart = () {
  return dispatch => {

    return BookingAPIUtil.fetchBookings()
      .then(bookings => {
        return dispatch(fetchBookingsSuccess(bookings));
    });
  };
};

*/
export const fetchBookings = () => {
  return dispatch => {
    return BookingAPIUtil.fetchBookings()
      .then(bookings => {
        return dispatch(receiveBookings(bookings));
      });
  };
};

export const fetchBooking = id => {
  return dispatch => {
    return BookingAPIUtil.fetchBooking(id)
      .then(booking => {
        return dispatch(receiveBooking(booking));
      });
  };
};

export const createBooking = booking => {
  return dispatch => {
    return BookingAPIUtil.createBooking(booking)
      .then(booking => {
        alert('Booking successfully made!');
      }, err => {
        dispatch(receiveBookingErrors(err.responseJSON));
      });
  };
};

export const updateBooking = booking => {
  return dispatch => {
    return BookingAPIUtil.updateBooking(booking)
      .then(booking => {
        return dispatch(receiveBooking(booking));
      });
  };
};

export const deleteBooking = bookingId => {
  return dispatch => {
    return BookingAPIUtil.deleteBooking(bookingId)
      .then(() => {
        return dispatch(removeBooking(bookingId));
      });
  };
};
