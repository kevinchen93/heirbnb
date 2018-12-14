import React from 'react';
import { Link } from 'react-router-dom';

import LoadingDots from '../loading_dots';
import Carousel from 'nuka-carousel';

import CreateReviewFormContainer from '../review/create_review_form_container';
import EditReviewFormContainer from '../review/edit_review_form_container';


class BookingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    this.handleClickLeaveAReview = this.handleClickLeaveAReview.bind(this);
    this.handleClickEditAReview = this.handleClickEditAReview.bind(this);
    this.handleClickDeleteBooking = this.handleClickDeleteBooking.bind(this);

    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  handleClickLeaveAReview(booking) {
    this.props.setCurrentBooking(booking);
    this.props.openCreateModal();
  }

  handleClickEditAReview(booking) {
    this.props.setCurrentBooking(booking);
    this.props.openEditModal();
  }

  handleClickDeleteBooking(bookingId) {
    setTimeout(() => this.props.deleteBooking(bookingId), 1000);
    setTimeout(() => this.setState({ loading: false }), 1500);
    this.setState({ loading: true });
}

  render() {
    if (!this.props.bookings || this.state.loading ) {
      return <LoadingDots state={this.state} />;
    }

    let userBookingsHeaderInfo;
    if (this.props.bookings.length > 0) {
      userBookingsHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Here are your bookings, {this.props.currentUser.first_name}!</div>
        </div>
      );
    } else {
      userBookingsHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Currently, you have no bookings, {this.props.currentUser.first_name}!</div>
        </div>
      );
    }
    
    const bookings = this.props.bookings.map( (booking, idx) => {
      let reviewButton;
      if (Boolean(booking.review)) {
        reviewButton = (
          <button className="booking-submit-button" onClick={ () => this.handleClickEditAReview(booking) }>Edit Review</button>
        )
      } else {
        reviewButton = (
          <button className="booking-submit-button" onClick={ () => this.handleClickLeaveAReview(booking) }>Leave a Review</button>
        )
      }

      return (
        <li key={idx} className="booking-listing-item-container">
            <Link to={`/listings/${booking.listing_id}`}>
              <Carousel>
                <img src={booking.listing.photoUrls[0]} />
                <img src={booking.listing.photoUrls[1]} />
                <img src={booking.listing.photoUrls[2]} />
                <img src={booking.listing.photoUrls[3]} />
                <img src={booking.listing.photoUrls[4]} />
              </Carousel>
            </Link>

          <div>
            <div className="booking-show-title">{booking.listing.title}</div>
            <div className="review-user-booking-dates-container">
              <div className="review-user-text">Hosted by {booking.host.first_name}</div>
              <div className="review-user-text">Check In: {booking.start_date}</div>
              <div className="review-user-text">Check Out: {booking.end_date}</div>
            </div>
            <div className="booking-buttons-container">
              {reviewButton}
              <button className="booking-submit-button" onClick={ () => this.handleClickDeleteBooking(booking.id) }>Cancel</button>
            </div>
          </div>
        </li>
      )
    });

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

export default BookingShow;
