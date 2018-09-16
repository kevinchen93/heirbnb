import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews, deleteReview } from '../../actions/review_actions';

const mapStateToProps = state => {
  return {
    reviews: Object.keys(state.entities.reviews).map(id => state.entities.reviews[id])
  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
