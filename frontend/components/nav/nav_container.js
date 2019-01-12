import { connect } from 'react-redux';

import NavBar from './nav_bar';

import { logout } from './../../actions/session_actions';
import { openModal, closeModal } from './../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  if (state.session) {
    return ({
      currentUserId: state.session.currentUserId,
      currentUser: state.entities.users[state.session.currentUserId]
    });
  } else {
    return null;
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
