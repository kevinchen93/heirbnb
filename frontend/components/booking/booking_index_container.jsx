import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return {
    bookings: Object.keys(state.entities.bookings).map(id => state.entities.bookings[id])
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
