import React from 'react';
import { Link } from 'react-router-dom';

class BookingShow extends React.Component {
  componentDidMount() {
    this.props.fetchBooking(this.props.match.params.bookingId);
  }

  componentWillReceiveProps(nextPros) {
    if (this.props.booking.id != nextProps.match.params.bookingId) {
      this.props.fetchBooking(nextProps.match.params.bookingId);
    }
  }

  render() {
    const { booking } = this.props;
    if (!booking) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <p>{booking.start_date}</p>
        <p>{booking.end_date}</p>
        <Link to={"/"}>Back to Index</Link>
      </div>
    );
  }
}

export default BookingShow;
