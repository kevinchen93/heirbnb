import React from 'react';
import { Link } from 'react-router-dom';

import LoadingDots from '../loading_dots';
import Carousel from 'nuka-carousel';

import BookingIndexItem from './booking_index_item';

import CreateReviewFormContainer from '../review/create_review_form_container';
import EditReviewFormContainer from '../review/edit_review_form_container';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    let userBookingsHeaderInfo;

    if (!this.props.bookings || this.state.loading ) {
      return <LoadingDots state={this.state} />;
    } else if (this.props.bookings.length === 0) {
      userBookingsHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Currently, you have no bookings, {this.props.currentUser.first_name}!</div>
        </div>
      );
      return userBookingsHeaderInfo;
    } else {
      userBookingsHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Here are your bookings, {this.props.currentUser.first_name}!</div>
        </div>
      );
      console.log(this.props.bookings);
      const bookings = this.props.bookings.map( (booking, idx) => (
        <BookingIndexItem
          key={idx}
          booking={booking}
        />
      ));

      return (
        <div className="user-listing-index-container">
          {userBookingsHeaderInfo}
          <div className="current-user-bookings-container">
            <div className="separator-24"></div>
          </div>
          <ul className="user-booking-ul">
            { bookings }
          </ul>
        </div>
      )
    }
  }
}

export default BookingIndex;
