import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { AuthRoute, ProtectedRoute, ProtectedRenderRoute } from '../../util/route_api_util';
import CreateBookingFormContainer from '../booking/create_booking_form_container';
import ListingMap from '../listing_map/listing_map';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
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

      const ratings = review.rating

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
            <ReactStars
              value={review.rating ? review.rating : 0}
              count={5}
              size={20}
              edit={review.rating ? false : true}
              color2={'#008489'} />
          </div>
          <div className="separator"></div>
        </div>
      )
    });

    return (
      <div>
        <img className="listing-show-image" src={listing.img_url}></img>
        <CreateBookingFormContainer prices={listing.prices} />

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
          <div className="show-page-map">
            <ListingMap singleListing={listing} lat={listing.lat} lng={listing.lng} fetchListing={this.props.fetchListing} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListingShow;
