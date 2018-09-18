import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listing_actions';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    listing: state.entities.listings[ownProps.match.params.listingId],
  });
};

const mapDispatchToProps = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
