import React from 'react';
import { Link } from 'react-router-dom';

class ReviewShow extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  componentWillReceiveProps(nextPros) {
    if (this.props.review.id != nextProps.match.params.reviewId) {
      this.props.fetchReview(nextProps.match.params.reviewId);
    }
  }

  render() {
    const { review } = this.props;
    if (!review) {
      return <div className="loading-text">Loading...</div>
    }

    return (
      <div>
        <p>{review.body}</p>
        <p>{review.description}</p>
        <p>{review.rating}</p>
        <Link to={"/"}>Back to Index</Link>
      </div>
    );
  }
}

export default ReviewShow;
