import { RECEIVE_SPLASH_LISTINGS } from '../actions/listing_actions';

const splashReducer = (state = {}, action) => {
  Object.freeze(state);

  if (action.type === RECEIVE_SPLASH_LISTINGS) {
    return Object.assign({}, state, action.splashListings);
  } else {
    return state;
  }
}

export default splashReducer;
