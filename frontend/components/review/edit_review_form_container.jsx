import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { fetchReview, updateReview, clearReviewErrors } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const currentBooking = state.ui.modal.currentBooking;
  debugger
  const review = {
    id: currentBooking.review.id,
    booking_id: currentBooking.id,
    body: currentBooking.review.body,
    rating: currentBooking.review.rating
  };

  debugger
  return {
    formType: 'Update Review',
    currentBooking: currentBooking,
    review: state.entities.reviews[state.ui.modal.currentReview.id],
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
