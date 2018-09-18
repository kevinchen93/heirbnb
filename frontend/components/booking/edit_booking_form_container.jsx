import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookingForm from './booking_form';
import { fetchBooking, updateBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultBooking = {
    start_date: '',
    end_date: ''
  };
  const booking = state.entities.bookings[ownProps.match.params.bookingId] || defaultBooking;
  const formType = 'Update Booking';

  return { booking, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBooking: id => dispatch(fetchBooking(id)),
    action: booking => dispatch(updateBooking(booking)),
  };
};

class EditBookingForm extends React.Component {
  componentDidMount() {
    this.props.fetchBooking(this.props.match.params.bookingId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.booking.id != nextProps.match.params.bookingId) {
      this.props.fetchBooking(nextProps.match.params.bookingId);
    }
  }

  render() {
    const { action, formType, booking } = this.props;
    return (
      <BookingForm
        action={action}
        formType={formType}
        booking={booking} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBookingForm);
