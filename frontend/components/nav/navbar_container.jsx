import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

export default connect(mapStateToProps, null)(NavBar);
