import { connect } from 'react-redux';
import UserListingShow from './user_listing_show';
import { fetchListings } from '../../actions/listing_actions';
import { userListings } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.listings);
  console.log(userListings(state));
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    listings: Object.values(state.entities.listings),
    userListings: () => userListings(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListingShow);
