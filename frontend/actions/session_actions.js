import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Regular Actions
const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};
const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

// Thunk Actions
export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
export const logout = () => {
  return dispatch => SessionAPIUtil.logout().then(
    response => dispatch(logoutCurrentUser())
  );
};
export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
