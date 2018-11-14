import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from './../../actions/session_actions';
import { openModal, closeModal } from './../../actions/modal_actions';

const mapStateToProps = state => {
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
