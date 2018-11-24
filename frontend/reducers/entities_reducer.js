import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import splashReducer from './splash_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  splash: splashReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,

});

export default entitiesReducer;
