import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewFormContainer from '../review/create_review_form_container';

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickLeaveAReview = this.handleClickLeaveAReview.bind(this);
    this.handleClickEditAReview = this.handleClickEditAReview.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings();
    this.props.userBookings();
  }

  handleClickLeaveAReview(booking) {
    this.props.setCurrentBooking(booking);
    this.props.openCreateModal();
  }

  handleClickEditAReview(booking) {
    this.props.setCurrentBooking(booking);
    this.props.openEditModal();
  }

  render() {
    if (!this.props.userBookings().every( el => Boolean(el)) ) {
      return <div className="loading-text">Loading...</div>;
    }

    let userBookingHeaderInfo;
    if (this.props.userBookings().length > 0) {
      userBookingHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Here are your bookings, {this.props.currentUser.first_name}!</div>
        </div>
      );
    } else {
      userBookingHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Currently, you have no bookings, {this.props.currentUser.first_name}!</div>
        </div>
      );
    }



    const bookings = this.props.userBookings().map( booking => {
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
      debugger

      return (
        <div key={booking.id}>
          <li className="booking-listing-item-container">
            <div>
              <Link to={`/listings/${booking.listing_id}`}>
                <img className="booking-image" src={booking.img_url}></img>
              </Link>
            </div>
            <div>
              <div className="booking-show-title">{booking.title}</div>
              <div className="review-user-text">Check In: {booking.start_date}</div>
              <div className="review-user-text">Check Out: {booking.end_date}</div>
              <div className="booking-buttons-container">
                {reviewButton}
                <button className="booking-submit-button" onClick={ () => this.props.deleteBooking(booking) }>Cancel</button>
              </div>
            </div>
          </li>
        </div>
      )
    });

    return (
      <div className="user-listing-index-container">
        {userBookingHeaderInfo}
        <div className="current-user-bookings-container">
          <h1 className="listing-h1">Your Current Bookings</h1>
          <div className="separator"></div>
        </div>
        <ul className="user-booking-ul">
          { bookings }
        </ul>
      </div>
    )
  }
}

export default BookingShow;
