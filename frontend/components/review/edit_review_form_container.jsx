import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { fetchReview, updateReview, clearReviewErrors } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const currentReview = state.ui.modal.currentReview;
  debugger
  const review = {
    id: currentReview.id,
    booking_id: currentReview.booking_id,
    body: currentReview.body,
    rating: currentReview.rating
  };

  debugger
  return {
    formType: 'Update Review',
    review: review,
    errors: state.errors.reviews,
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    action: review => dispatch(updateReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
