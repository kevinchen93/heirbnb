import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

// Regular action creator
export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

// Thunk action creator
export const changeFilter = (filter, value) => {
  return (dispatch) => {
    dispatch(updateFilter(filter, value));
    return dispatch(fetchListings({[filter]: value}));
  };
};
