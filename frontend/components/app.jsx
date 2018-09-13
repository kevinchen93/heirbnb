import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HeaderContainer from './header/header_container';
import NavBarContainer from './nav/navbar_container';
import { AuthRoute, ProtectedRoute } from './../util/route_api_util';
import Modal from './modal/modal';

const App = (props) => {
  return (
    <div>
      <Modal />
      <NavBarContainer />
      <Route exact path="/" render={() => <HeaderContainer />} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <div id="footer">
        <div className="footer-container">
          <div className="footer-icon"></div>
          <button>Terms, Privacy, Currency & More</button>
        </div>
      </div>
    </div>
  )
}

export default App;
