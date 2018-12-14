import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

// Regular action creator
export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

// Thunk action creator
export const updateFilter = (filter, value) =>  (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchListings(getState().ui.filters)(dispatch);
};
