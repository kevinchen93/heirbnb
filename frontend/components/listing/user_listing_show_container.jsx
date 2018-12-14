import { connect } from 'react-redux';
import UserListingShow from './user_listing_show';
import { userListings } from '../../reducers/selectors.js';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId],
    listings: Object.values(state.entities.listings),
    currentUser: state.entities.users[state.session.currentUserId],
    userListings: () => userListings(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    updateFilter: (filter, value) => dispatch(changeFilter(filter, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListingShow);
