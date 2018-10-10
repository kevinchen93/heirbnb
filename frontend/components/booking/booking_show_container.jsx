import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchBookings, fetchBooking, deleteBooking } from '../../actions/booking_actions';
import { userBookings } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.currentUserId],
    bookings: Object.values(state.entities.bookings),
    userBookings: () => userBookings(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: id => dispatch(fetchBooking(id)),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingShow);
