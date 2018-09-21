import Header from './header.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchListings } from './../../actions/listing_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    listings: state.entities.listings,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
