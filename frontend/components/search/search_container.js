import { connect } from 'react-redux';
import Search from './search';

import { fetchListings, removeListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  removeListings: () => dispatch(removeListings()),
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  fetchListings: (filters) => dispatch(fetchListings(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
