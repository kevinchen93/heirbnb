import React from 'react';

const Reviews = (props) => {
  const listing = props.listing;

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
      {reviewHeaderContainer}
      <div className="separator-24"></div>
      {reviewElements}
    </div>
  );
};

export default Reviews;
