import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { fetchReview, updateReview } from '../../actions/review_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = 'Update Review';
  const currentBooking = state.ui.modal.currentBooking;
  const review = {
    id: currentBooking.review.id,
    booking_id: currentBooking.id,
    body: currentBooking.review.body,
    rating: currentBooking.review.rating
  };

  return {
    errors: state.errors.reviews,
    currentBooking: currentBooking,
    review: review,
    formType: formType,
   };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    action: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
