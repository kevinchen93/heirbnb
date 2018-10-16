import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListings, fetchListing } from '../../actions/listing_actions';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    listing: state.entities.listings[ownProps.match.params.listingId],
    listings: state.entities.listings,
    reviews: state.entities.reviews,
    users: state.entities.users,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchListing: id => dispatch(fetchListing(id)),
  fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
