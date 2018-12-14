import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking, clearBookingErrors } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = 'Create Booking';

  return {
    currentUserId: state.session.currentUserId,
    errors: state.errors.bookings,
    formType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: booking => dispatch(createBooking(booking)),
    openModal: modal => dispatch(openModal(modal)),
    clearBookingErrors: () => dispatch(clearBookingErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
