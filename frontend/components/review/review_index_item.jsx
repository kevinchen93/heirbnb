import { connect } from 'react-redux';
import ReviewIndexItem from './review_index_item';
import { fetchReviews, fetchReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    review: ownProps.review,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  fetchReview: id => dispatch(fetchReview(id)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem);
