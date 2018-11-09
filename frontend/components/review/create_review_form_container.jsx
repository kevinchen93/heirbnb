import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview, clearReviewErrors } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const currentBooking = state.ui.modal.currentBooking;
  const review = {
    body: '',
    rating: 0
  };

  debugger
  return {
    formType: 'Submit Review',
    currentBooking: currentBooking,
    review: review,
    errors: state.errors.reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
