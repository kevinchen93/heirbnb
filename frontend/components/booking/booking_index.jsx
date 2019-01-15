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

    setTimeout(() => this.setState({ loading: false }), 1500);
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
          <div className="subheading header-background-image-text text-centered">Currently, you have no reservations, {this.props.currentUser.first_name}!</div>
        </div>
      );
      return userBookingsHeaderInfo;
    } else {
      userBookingsHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text text-centered">Here are your reservations, {this.props.currentUser.first_name}!</div>
        </div>
      );
      const bookings = this.props.bookings.map( (booking, idx) => (
        <BookingIndexItem
          key={idx}
          booking={booking}
          setCurrentBooking={this.props.setCurrentBooking}
          openCreateModal={this.props.openCreateModal}
          openEditModal={this.props.openEditModal}
          deleteBooking={this.props.deleteBooking}
        />
      ));

      return (
        <div className="user-listing-index-container">
          {userBookingsHeaderInfo}
          <ul className="user-booking-ul">
            { bookings }
          </ul>
        </div>
      )
    }
  }
}

export default BookingIndex;
