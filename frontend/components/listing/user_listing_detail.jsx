import React from 'react';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ProtectedRenderRoute } from '../../util/route_api_util';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateBookingFormContainer from '../booking/create_booking_form_container';

class UserListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.id).fail( () => this.props.history.push('/profile/listings') );
  }

  render() {
    const { listing, reviews, users } = this.props;
    if (!listing) {
      return <div>Loading...</div>;
    };

    let reviewHeaderContainer;
    if (listing.review_ids.length > 0) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Reviews</div>)
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

    return (
      <div className="review-container" key={review.id}>
        <div className="review-content-container">
          <div className="review-header">
            <div className="user-icon"></div>
            <div className="review-user-date-container">
              <div className="review-user-text">
                {reviewer.first_name}
              </div>
              <div className="review-content-text">{month} {year}</div>
            </div>
          </div>
          <div key={review.id} className="review-content-text review-content-body">{review.body}</div>
          <div className="review-content-text">Rating: {review.rating}</div>
        </div>
        <div className="separator"></div>
      </div>
    )
  });

  return (
    <div>
      <img className="listing-show-image" src={listing.img_url}></img>
      <ProtectedRoute exact path="/profile/listings/:listingId" component={CreateBookingFormContainer} />

      <div className="listing-show-container">

        <div className="listing-show-title">{listing.title}</div>
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
          {reviewHeaderContainer}
          <div className="separator"></div>
          {reviewElements}
        </div>

        <button className="user-listing-detail-submit-button" onClick={ this.props.openModal }>Edit</button>
        <button className="user-listing-detail-submit-button" onClick={ () => this.props.deleteListing(this.props.listing).then( () => this.props.history.push('/profile/listings')) }>Delete</button>
      </div>

    </div>
  )
  }
}

export default UserListingDetail;
