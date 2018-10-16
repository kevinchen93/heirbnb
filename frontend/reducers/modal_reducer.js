import { OPEN_MODAL, CLOSE_MODAL, SET_CURRENT_BOOKING } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      let oldState = state;
      let currentBooking;
      if (oldState.currentBooking) {
        currentBooking = oldState.currentBooking;
      }
      return {
        type: action.modal,
        props: action.ownProps,
        currentBooking: currentBooking,
      }
    case CLOSE_MODAL:
      return null;
    case SET_CURRENT_BOOKING:
      return {
        currentBooking: action.booking
      };
    default:
      return state;
  }
}
