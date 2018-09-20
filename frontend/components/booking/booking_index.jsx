import React from 'react';
import BookingIndexContainer from './booking_index_container';
import BookingIndexItem from './booking_index_item';
import CreateBookingFormContainer from './create_booking_form_container';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const bookings = this.props.bookings.map(booking => {
      return (
        <BookingIndexItem
          key={booking.id}
          booking={booking}
          deleteBooking={this.props.deleteBooking} />
      );
    });

    return (
      <div>
        <div className="current-user-bookings-container">
          <h1 className="listing-h1">Your Bookings</h1>
          <div className="separator"></div>
        </div>
        <ul>
          {bookings}
        </ul>
      </div>
    );
  }
}

export default BookingIndex;
