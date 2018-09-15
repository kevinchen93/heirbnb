import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => ({
  booking: state.bookings[ownProps.match.params.bookingId]
});

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingShow);
