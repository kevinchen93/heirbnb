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
        <div className="review-container">{listing.reviews.length} {reviewHeading}
          <div>{review.reviewer_id}</div>
          <div>{month} {year}</div>
          <div key={review.id}>{review.body}</div>
          <div>Rating: {review.rating}</div>
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
            {reviews}
          </div>

        </div>
      </div>
    );
  }
}

export default ListingShow;
