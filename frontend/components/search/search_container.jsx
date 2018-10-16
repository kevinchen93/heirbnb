import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
  listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id]),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchListings: () => dispatch(fetchListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
