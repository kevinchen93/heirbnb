import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { fetchListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  const booking = {
    start_date: '',
    end_date: '',
  };

  const formType = 'Create Booking';
  return { booking, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    action: booking => dispatch(createBooking(booking)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
