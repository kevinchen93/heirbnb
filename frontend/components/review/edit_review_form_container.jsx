import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { fetchReview, updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultReview = {
    body: '',
    description: '',
    rating: ''
  };
  const review = state.reviews[ownProps.match.params.reviewId] || defaultReview;
  const formType = 'Update Review';

  return { review, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    action: review => dispatch(updateReview(review)),
  };
};

class EditReviewForm extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.review.id != nextProps.match.params.reviewId) {
      this.props.fetchReview(nextProps.match.params.reviewId);
    }
  }

  render() {
    const { action, formType, review } = this.props;
    return (
      <ReviewForm
        action={action}
        formType={formType}
        review={review} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);