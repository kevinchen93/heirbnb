import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_api_util';
import Modal from './modal/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container';
import HeaderContainer from './header/header_container';
import ListingIndexContainer from './listings/listing_index_container';
import ListingShowContainer from './listings/listing_show_container';
import EditListingFormContainer from './listings/edit_listing_form_container';

const App = (props) => {
  return (
    <div className="main-content-container">

      <Modal />
      <NavBarContainer />
      <Route exact path="/" render={() => <HeaderContainer />} />
      <Switch>
        <Route exact path="/" component={ListingIndexContainer}/>
        <Route exact path="/listings/:listingId" component={ListingShowContainer} />
        <Route exact path="/listings/:listingId/edit" component={EditListingFormContainer} />
      </Switch>
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
