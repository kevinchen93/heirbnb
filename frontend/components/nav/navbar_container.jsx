import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { openModal, closeModal } from './../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal('login'))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
