import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const review = {
    body: '',
    rating: 0
  };

  const formType = 'Submit Review';
  const currentBooking = state.ui.modal.currentBooking;

  return {
    review,
    formType,
    currentBooking: currentBooking
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
