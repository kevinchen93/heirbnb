import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { fetchBookings, fetchBooking, deleteBooking } from '../../actions/booking_actions';
import { createReview, updateReview } from '../../actions/review_actions';
import { userBookings } from '../../reducers/selectors';
import { openModal, closeModal, setCurrentBooking, setCurrentReview } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: Object.values(state.entities.bookings),
    currentUser: state.entities.users[state.session.currentUserId],
    userBookings: () => userBookings(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: id => dispatch(fetchBooking(id)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  openCreateModal: () => dispatch(openModal('create review')),
  openEditModal: () => dispatch(openModal('edit review')),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  setCurrentBooking: (booking) => dispatch(setCurrentBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);
