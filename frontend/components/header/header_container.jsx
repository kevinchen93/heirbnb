import Header from './header.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchListings } from '../../actions/listing_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.entities.users[state.session.currentUserId],
    listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id]),
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
