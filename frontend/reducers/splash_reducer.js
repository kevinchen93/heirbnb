import merge from 'lodash/merge';

import { RECEIVE_SPLASH_LISTINGS } from '../actions/listing_actions';

const splashReducer = (state = {}, action) => {
  Object.freeze(state);

  if (action.type === RECEIVE_SPLASH_LISTINGS) {
    return merge({}, state, action.splashListings);
  } else {
    return state;
  }
}

export default splashReducer;
