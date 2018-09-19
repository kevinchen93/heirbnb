import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.listing || this.props.listing.id !== parseInt(nextProps.match.params.listingId)) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  render() {
    const { listing, users } = this.props;
    if (!listing) {
      return <div>Loading...</div>;
    };

    let reviewHeaderContainer;
    if (listing.reviews.length > 0) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.reviews.length} Reviews</div>)
    }

    const reviews = listing.reviews.map( review => {

      const monthsArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const date = new Date (Date.parse(review.created_at));
      const month = monthsArray[parseInt(date.getMonth())];
      const year = date.getFullYear();

      let reviewHeading;
      if (listing.reviews.length === 1) {
        reviewHeading = "Review"
      } else {
        reviewHeading = "Reviews"
      }

      return (
        <div className="review-container">
          <div className="review-content-container">
            <div className="review-user-text">Reviewer ID: {review.reviewer_id}</div>
            <div className="review-content-text">{month} {year}</div>
            <div key={review.id} className="review-content-text review-content-body">{review.body}</div>
            <div className="review-content-text">Rating: {review.rating}</div>
          </div>
          <div className="separator"></div>
        </div>
      )
    });

    return (
      <div>
        <div className="listing-show-image"></div>

        <div className="listing-show-container">

          <div className="listing-show-title">{listing.title}</div>
          <div className="listing-show-content">
            <div className="listing-show-description">
              {listing.description}
            </div>
            {reviewHeaderContainer}
            <div className="separator"></div>
            {reviews}
          </div>

        </div>
      </div>
    );
  }
}

export default ListingShow;
