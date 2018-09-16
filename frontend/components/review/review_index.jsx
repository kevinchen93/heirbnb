import React from 'react';
import ReviewIndexContainer from './review_index_container';
import ReviewIndexItem from './review_index_item';
import CreateReviewFormContainer from './create_review_form_container';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const reviews = this.props.reviews.map(review => {
      return (
        <ReviewIndexItem
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview} />
      );
    });

    return (
      <div>
        <ul>
          {reviews}
        </ul>
        <CreateReviewFormContainer />
      </div>
    );
  }
}

export default ReviewIndex;
