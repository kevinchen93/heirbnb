import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from 'react';

import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import {
  AuthRoute,
  ProtectedRoute,
  ProtectedRenderRoute
} from './../util/route_api_util';

import '../../app/assets/stylesheets/components/react_dates_overrides.css';
import Modal from './modal/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/nav_container.js';

import Landing from './splash/landing';
import SplashIndex from './splash/splash_index';
import SplashContainer from './splash/splash_container.js';

import ListingShowContainer from './listing/listing_show_container';
import CreateListingFormContainer from './listing/create_listing_form_container';

import BookingIndexContainer from './booking/booking_index_container';
import CreateBookingFormContainer from './booking/create_booking_form_container.js';
import EditBookingFormContainer from './booking/edit_booking_form_container';

import ReviewIndexContainer from './review/review_index_container';
import ReviewShowContainer from './review/review_show_container';
import EditReviewFormContainer from './review/edit_review_form_container';

import SearchContainer from './search/search_container.js';

import UserListingShowContainer from './listing/user_listing_show_container';
import UserListingDetailContainer from './listing/user_listing_detail_container';
import EditUserListingFormContainer from './listing/edit_user_listing_form_container';

import Footer from './footer';

const App = (props) => {
  return (
    <div className="main-content-container">
      <Modal />
      <Route path="/(search|listings|trips|profile)" component={NavBarContainer} />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={SearchContainer} />
        <Route exact path="/listings" component={SplashContainer} />
        <Route exact path="/listings/:listingId" component={ListingShowContainer} />
        <ProtectedRoute exact path="/trips" component={BookingIndexContainer} />
        <ProtectedRoute exact path="/become-a-host" component={CreateListingFormContainer} />
        <ProtectedRoute exact path="/profile/listings" component={UserListingShowContainer} />
        <ProtectedRoute exact path="/profile/listings/:listingId" component={UserListingDetailContainer} />
        <Route exact path="/profile/listings/:listingId/edit" component={EditUserListingFormContainer} />
        <Redirect to="/listings" />
      </Switch>

      <Footer />
    </div>
  )
}

export default App;
