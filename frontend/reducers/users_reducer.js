import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import { merge } from 'lodash';

const usersReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, state, { [action.user.id]: action.user });
      return newState;
    case RECEIVE_LISTING:
      return merge({}, state, action.users );
    default:
      return state;
  }
};

export default usersReducer;
