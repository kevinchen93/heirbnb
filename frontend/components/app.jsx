import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_api_util';
import Modal from './modal/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container';
import HeaderContainer from './header/header_container';
import ListingIndexContainer from './listing/listing_index_container';
import ListingShowContainer from './listing/listing_show_container';
import EditListingFormContainer from './listing/edit_listing_form_container';
import BookingIndexContainer from './booking/booking_index_container';
import BookingShowContainer from './booking/booking_show_container';
import EditBookingFormContainer from './booking/edit_booking_form_container';
import ReviewIndexContainer from './review/review_index_container';
import ReviewShowContainer from './review/review_show_container';
import EditReviewFormContainer from './review/edit_review_form_container';

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
