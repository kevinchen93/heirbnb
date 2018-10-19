import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { createBooking, clearBookingErrors } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = 'Create Booking';

  return {
    errors: state.errors.bookings,
    formType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: booking => dispatch(createBooking(booking)),
    clearBookingErrors: () => dispatch(clearBookingErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
