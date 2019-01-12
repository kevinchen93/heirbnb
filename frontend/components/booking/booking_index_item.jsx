import React from 'react';
import { Link } from 'react-router-dom';

import LoadingDots from '../loading_dots';
import Carousel from 'nuka-carousel';

import CreateReviewFormContainer from '../review/create_review_form_container';
import EditReviewFormContainer from '../review/edit_review_form_container';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    this.handleClickLeaveAReview = this.handleClickLeaveAReview.bind(this);
    this.handleClickEditAReview = this.handleClickEditAReview.bind(this);
    this.handleClickDeleteBooking = this.handleClickDeleteBooking.bind(this);
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
    if (this.state.loading) {
      return (
      <div>
        <LoadingDots state={this.state} />;
      </div>
      )
    } else {
      let reviewButton;
      if (this.props.booking.review) {
        reviewButton = (
          <button className="booking-submit-button" onClick={ () => this.handleClickEditAReview(this.props.booking) }>Edit Review</button>
        )
      } else {
        reviewButton = (
          <button className="booking-submit-button" onClick={ () => this.handleClickLeaveAReview(this.props.booking) }>Leave a Review</button>
        )
      }
      console.log(this.props);
      return (
        <li className="booking-listing-item-container">
            <Link to={`/listings/${this.props.booking.listing_id}`}>
              <Carousel>
                <img src={this.props.booking.listing.photoUrls[0]} />
                <img src={this.props.booking.listing.photoUrls[1]} />
                <img src={this.props.booking.listing.photoUrls[2]} />
                <img src={this.props.booking.listing.photoUrls[3]} />
                <img src={this.props.booking.listing.photoUrls[4]} />
              </Carousel>
            </Link>

          <div>
            <div className="booking-show-title">{this.props.booking.listing.title}</div>
            <div className="review-user-this.props.booking-dates-container">
              <div className="review-user-text">Hosted by {this.props.booking.host.first_name}</div>
              <div className="review-user-text">Check In: {this.props.booking.start_date}</div>
              <div className="review-user-text">Check Out: {this.props.booking.end_date}</div>
            </div>
            <div className="booking-buttons-container">
              {reviewButton}
              <button className="booking-submit-button" onClick={ () => this.handleClickDeleteBooking(this.props.booking.id) }>Cancel</button>
            </div>
          </div>
        </li>
      )
    }
  }
}
export default BookingIndexItem;
