import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import {
  AuthRoute,
  ProtectedRoute,
  ProtectedRenderRoute
} from '../../util/route_api_util';

import CreateBookingFormContainer from '../booking/create_booking_form_container.js';
import ListingMap from '../listing_map/listing_map';
import LoadingDots from '../loading_dots';
import Amenities from './amenities';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.listing && parseInt(nextProps.match.params.listingId) !== this.props.listing.id) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  isDayBooked(day) {
    const formattedDay = day.format('YYYY-MM-DD');
    const dates = this.props.listing.booked_dates.map(date => moment(date).format('YYYY-MM-DD'));
    return dates.includes(formattedDay);
  }

  render() {
    const { listing, reviews, users } = this.props;

    if (!listing || this.state.loading) {
      return <LoadingDots state={this.state.loading} />;
    };

    let reviewHeaderContainer;
    if (listing.review_ids.length === 1) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Review</div>);
    } else if (listing.review_ids.length > 1) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Reviews</div>);
    }

    const reviewElements = Object.values(listing.reviews).map( review => {
      if (!review) return null;

      const reviewer = review.reviewer;
      const monthsArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const date = new Date (Date.parse(review.created_at));
      const month = monthsArray[parseInt(date.getMonth())];
      const year = date.getFullYear();

      let reviewHeading;
      let numReviews;
      if (listing.reviews.length === 1) {
        reviewHeading = "Review"
        numReviews = 1;
      } else if (listing.reviews.length < 1) {
        reviewHeading = "No reviews"
        numReviews = 0;
      } else {
        reviewHeading = "Reviews"
        numReviews = listing.reviews.length;
      }

      return (
        <div className="review-container" key={review.id}>
          <div className="review-content-container">
            <div className="review-header">
              <img src={review.reviewer.photoUrl} className="user-icon"></img>
              <div className="review-user-date-container">
                <div>
                  <div className="review-user-text">
                    {reviewer.first_name}
                  </div>
                </div>
                <div className="review-content-text">{month} {year}</div>
              </div>
            </div>
            <div key={review.id} className="review-content-body">{review.body}</div>
            <div className="separator-24"></div>
          </div>
        </div>
      )
    });

    return (
      <div>
        <div className="listing-show-photo-container">
          <div className="listing-show-photo-left-container">

            <img src={listing.photoUrls[0]} />
          </div>

          <div className="listing-show-photo-middle-container">
            <div className="middle-1">
              <img src={listing.photoUrls[1]} />
            </div>

            <div className="middle-2">
              <img src={listing.photoUrls[2]} />
            </div>
          </div>

          <div className="listing-show-photo-right-container">
            <div className="right-1">
              <img src={listing.photoUrls[3]} />
            </div>

            <div className="right-2">
              <img src={listing.photoUrls[4]} />
            </div>
          </div>
        </div>

        <div className="listing-show-container">
          <div className="listing-show-left">
            <span style={{ color: "#734f21", fontSize: "12px", fontWeight: "800" }}>PRIVATE ROOM IN APARTMENT</span>
            <div className="listing-show-title">{listing.title}</div>
            <span className="listing-show-description">{listing.city}</span>
            <div className="listing-show-content">
              <div className="listing-show-commodities">
                <i style={{ width: "12.5px", height: "19px", paddingRight: "8px" }} className="fas fa-user-friends"></i>&nbsp;{listing.guests}
                <i style={{ width: "12.5px", height: "19px", paddingRight: "8px", paddingLeft: "12px" }} className="fas fa-warehouse"></i>&nbsp;{listing.bedrooms}
                <i style={{ width: "12.5px", height: "19px", paddingRight: "8px", paddingLeft: "12px" }} className="fas fa-bed"></i>&nbsp;{listing.beds}
                <i style={{ width: "12.5px", height: "19px", paddingRight: "8px", paddingLeft: "12px" }} className="fas fa-bath"></i>{listing.baths}
              </div>
              <div className="listing-show-description">
                {listing.description}
              </div>

              <div className="separator-24"></div>

              <div className="house-rules-header">Amenities</div>
              <Amenities listing={listing} />

            <div className="separator-24"></div>
            <div className="house-rules-header">Accessibility</div>
            <div className="accessibilities-container">
              <ul>
                <li>Well-lit path to the home's entrance</li>
                <li>Wide hallway clearance</li>
              </ul>
            </div>

            <div className="separator-24"></div>

            <div className="availability-calendar-container">
              <h3>Availability</h3>
              <div className="availability-calendar">
                <DayPickerRangeController
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                  hideKeyboardShortcutsPanel={true}
                  isDayBlocked={day => this.isDayBooked(day)}
                  numberOfMonths={2}
                />
              </div>
            </div>


            {reviewHeaderContainer}
            <div className="separator-24"></div>

            {reviewElements}

          </div>

          <div className="the-neighborhood-header">The neighborhood</div>
          <div className="show-page-map">
            <ListingMap listing={listing} />
          </div>

          <div className="the-neighborhood-header">Policies</div>
          <div className="house-rules-header">House Rules</div>
          <div className="review-content-text review-content-body">No pets</div>
          <div className="review-content-text review-content-body">No parties or events</div>
          <div className="review-content-text review-content-body">Check-in time is 4PM-7PM</div>
          <div className="review-content-text review-content-body">Check out by noon</div>
          <div className="separator-24"></div>
          <div className="house-rules-header">Cancellations</div>
          <div className="strict-text">Strict</div>
          <div className="cancellation-text">Cancel up to 30 days before check-in and get a full refund.</div>
        </div>

        <div className="listing-show-right">
          <CreateBookingFormContainer listing={listing} />
        </div>

      </div>
    </div>
    );
  }
}

export default ListingShow;
