import { RECEIVE_LISTING_ERRORS, CLEAR_LISTING_ERRORS } from '../actions/listing_actions';

const reviewErrorsReducer = ( state = [], action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case CLEAR_LISTING_ERRORS:
      return [];
    default:
      return state;
  }
};

export default reviewErrorsReducer;
