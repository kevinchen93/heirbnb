import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    bookings: Object.values(state.entities.bookings)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
