import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HeaderContainer from './header/header_container';

const App = (props) => {
  return (
    <div>
      <Route exact path="/" render={() => <HeaderContainer />} />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;
