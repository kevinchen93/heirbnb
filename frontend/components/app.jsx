import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HeaderContainer from './header/header_container';
import NavBarContainer from './nav/navbar_container';
import { AuthRoute, ProtectedRoute } from './../util/route_api_util';

const App = (props) => {
  return (
    <div>
      <NavBarContainer />
      <Route exact path="/" render={() => <HeaderContainer />} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;
