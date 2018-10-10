import React from 'react';
import { Link } from 'react-router-dom';

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
    this.props.userBookings();
  }

  render() {
    if (!this.props.userBookings().every( el => Boolean(el)) ) {
      return <div>Loading...</div>;
    }

    if (this.props.userBookings().length === 0) {
      return <div>You have no current bookings!</div>
    }

    const bookings = this.props.userBookings().map( booking => {
      return (
        <div key={booking.id}>
          <p>{booking.start_date}</p>
          <p>{booking.end_date}</p>
          <button onClick={ () => this.props.deleteBooking(booking)}>CANCEL</button>
          <br />
          <br />
        </div>
      )
    });

    return (
      <div>
        <div className="current-user-bookings-container">
          <h1 className="listing-h1">Your Bookings</h1>
          <div className="separator"></div>
        </div>
        <ul>
          { bookings }
        </ul>
      </div>
    )
  }
}

export default BookingShow;
