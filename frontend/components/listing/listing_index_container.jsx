import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings, deleteListing } from '../../actions/listing_actions';

const mapStateToProps = state => {
  return {
    listings: Object.values(state.entities.listings),
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  deleteListing: id => dispatch(deleteListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);
