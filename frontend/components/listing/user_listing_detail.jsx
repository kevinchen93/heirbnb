import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedRenderRoute } from '../../util/route_api_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateBookingFormContainer from '../booking/create_booking_form_container.js';
import ReactStars from 'react-stars';

class UserListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.id).fail( () => this.props.history.push('/profile/listings') );
    window.scrollTo(0,0);
  }

  render() {
    const { listing, reviews, users } = this.props;
    if (!listing) {
      return <div className="loading-text">Loading...</div>;
    };

    let reviewHeaderContainer;
    if (listing.review_ids.length === 1) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Review</div>);
    } else if (listing.review_ids.length > 1) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Reviews</div>);
    }

    const reviewElements = listing.review_ids.map( reviewId => {
      const review = reviews[reviewId];
      if (!review) return null;

      const reviewer = users[review.reviewer_id];

      const monthsArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const date = new Date (Date.parse(review.created_at));
      const month = monthsArray[parseInt(date.getMonth())];
      const year = date.getFullYear();

      let reviewHeading;
      if (listing.review_ids.length === 1) {
        reviewHeading = "Review"
      } else {
        reviewHeading = "Reviews"
      }

      let numReviews;
      if (listing.review_ids.length === 1) {
        numReviews = 'No reviews';
      } else {
        numReviews = listing.review_ids.length;
      }

    return (
      <div className="review-container" key={review.id}>
        <div className="review-content-container">
          <div className="review-header">
            <div className="user-icon"></div>
            <div className="review-user-date-container">
              <div className="review-user-text">
                {review.first_name}
              </div>
              <div className="review-content-text">{month} {year}</div>
            </div>
            <ReactStars
              value={review.rating ? review.rating : 0}
              count={5}
              size={20}
              edit={review.rating ? false : true}
              color2={'#008489'} />
          </div>
          <div key={review.id} className="review-content-text review-content-body">{review.body}</div>
        </div>
        <div className="separator-24"></div>
      </div>
    )
  });

    return (
      <div>
        <img className="listing-show-image" src={listing.img_url}></img>
        <div className="user-edit-delete-buttons-container">
          <button className="user-listing-detail-submit-button" onClick={ this.props.openModal }>Edit</button>
          <button className="user-listing-detail-submit-button" onClick={ () => this.props.deleteListing(this.props.listing).then( () => this.props.history.push('/profile/listings')) }>Delete</button>
        </div>

        <div className="listing-show-container">
          <span style={{ color: "#734f21", fontSize: "12px", fontWeight: "800" }}>PRIVATE ROOM IN APARTMENT</span>
          <div className="listing-show-title">{listing.title}</div>
          <span className="listing-show-description">New York</span>
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
            <div className="listing-content-header">Amenities</div>
            <div className="amenities-container">
              <ul>
                <li>Elevator</li>
                <li>Gym</li>
                <li>Kitchen</li>
              </ul>
              <ul>
                <li>Wifi</li>
                <li>Cable TV</li>
                <li>Washer</li>
              </ul>
            </div>
            <div className="separator-24"></div>
            <div className="listing-content-header">Accessibility</div>
            <div className="amenities-container">
              <ul>
                <li>Well-lit path to entrance</li>
              </ul>
              <ul>
                <li>Wide hallway clearance</li>
              </ul>
            </div>
            {reviewHeaderContainer}
            <div className="separator-24"></div>
            {reviewElements}
          </div>
          <div className="the-neighborhood-header">Policies</div>
          <div className="listing-content-header">House Rules</div>
          <div className="review-content-text review-content-body">No pets</div>
          <div className="review-content-text review-content-body">No parties or events</div>
          <div className="review-content-text review-content-body">Check-in time is 4PM-7PM</div>
          <div className="review-content-text review-content-body">Check out by noon</div>
          <div className="separator-24"></div>
          <div className="listing-content-header">Cancellations
            <div className="strict-text">Strict</div>
            <div className="cancellation-text">Cancel up to 30 days before check-in and get a full refund.</div>
          </div>

          <div className="listing-show-right">
            <CreateBookingFormContainer listing={listing} />
          </div>

        </div>
      </div>
    )
  }
}

export default UserListingDetail;
