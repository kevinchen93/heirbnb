import { connect } from 'react-redux';
import BookingIndexItem from './booking_index_item';
import { fetchBookings, fetchBooking, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    booking: ownProps.booking,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: id => dispatch(fetchBooking(id)),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndexItem);
