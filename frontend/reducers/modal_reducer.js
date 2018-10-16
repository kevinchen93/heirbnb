import { OPEN_MODAL, CLOSE_MODAL, SET_CURRENT_BOOKING } from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (state !== null && state.currentBooking) {
        return {
          type: action.modal,
          props: action.ownProps,
          currentBooking: state.currentBooking,
        };
      } else {
        return {
          type: action.modal,
          props: action.ownProps,
        };
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
