import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import '../../app/assets/stylesheets/components/react_dates_overrides.css';
import { AuthRoute, ProtectedRoute, ProtectedRenderRoute } from './../util/route_api_util';
import Modal from './modal/modal';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container';
import HeaderContainer from './header/header_container';
import ListingIndexContainer from './listing/listing_index_container';
import ListingShowContainer from './listing/listing_show_container';
import CreateListingFormContainer from './listing/create_listing_form_container';
import BookingIndexContainer from './booking/booking_index_container';
import BookingShowContainer from './booking/booking_show_container';
import CreateBookingFormContainer from './booking/create_booking_form_container';
import EditBookingFormContainer from './booking/edit_booking_form_container';
import ReviewIndexContainer from './review/review_index_container';
import ReviewShowContainer from './review/review_show_container';
import EditReviewFormContainer from './review/edit_review_form_container';
import SearchContainer from './search/search_container';
import UserListingShowContainer from './listing/user_listing_show_container';
import UserListingDetailContainer from './listing/user_listing_detail_container';
import EditUserListingFormContainer from './listing/edit_user_listing_form_container';

const App = (props) => {
  return (
    <div className="main-content-container">
      <Modal />
      <NavBarContainer />

      <Route exact path="/" render={() => <HeaderContainer />} />
      <ProtectedRoute exact path="/" component={SearchContainer} />

      <ProtectedRoute exact path="/trips" component={BookingShowContainer} />

      <ProtectedRoute exact path="/profile/listings" component={UserListingShowContainer} />
      <ProtectedRoute exact path="/profile/listings/:listingId" component={UserListingDetailContainer} />

      <Route exact path="/profile/listings/:listingId/edit" component={EditUserListingFormContainer} />

      <ProtectedRoute exact path="/become-a-host" component={CreateListingFormContainer} />

      <Switch>
        <Route exact path="/listings/:listingId" component={ListingShowContainer} />
        <Route exact path="/listings" render={() => <ListingIndexContainer/>} />
      </Switch>

      <div id="footer">
        <div className="footer-container">
          <div className="footer-icon">
            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '15px', width: '15px', display: 'block' }}>
              <path d="m11 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.95-1.07-.14-.21a6.54 6.54 0 0 1 -.29-.5 12.85 12.85 0 0 1 -.66-1.47c-.09-.25-.17-.5-.25-.76h4.57c-.08.26-.16.51-.25.76a12.85 12.85 0 0 1 -.66 1.47 6.54 6.54 0 0 1 -.29.5l-.14.21c-.31.04-.63.07-.95.07s-.64-.03-.95-.07zm-2.03-6.93h5.95a14.71 14.71 0 0 1 -.41 3h-5.13a14.71 14.71 0 0 1 -.41-3zm .47-4h5.01c.27.88.43 1.88.47 3h-5.95c.04-1.12.2-2.12.47-3zm4.8 10.61a13.85 13.85 0 0 0 1.04-2.61h2.4a7.01 7.01 0 0 1 -3.44 2.61zm4.02-3.61h-2.73c.22-.96.35-1.96.38-3h3.02a6.96 6.96 0 0 1 -.68 3zm-2.34-4a12.86 12.86 0 0 0 -.44-3h2.2a6.95 6.95 0 0 1 1.18 3zm .92-4h-1.68c-.08-.22-.16-.45-.26-.65a8.38 8.38 0 0 0 -.49-.9 7 7 0 0 1 2.43 1.55zm-4.04-1.94.3.3c.05.04.14.15.26.32a6.8 6.8 0 0 1 .64 1.1c.03.07.06.15.09.23h-4.28c.03-.07.06-.15.09-.23a6.78 6.78 0 0 1 .64-1.1c.13-.17.22-.28.26-.32l.3-.3a7.04 7.04 0 0 1 .85-.06c.29 0 .57.02.85.06zm-3.31.4c-.16.25-.32.54-.49.9-.1.21-.17.43-.26.65h-1.68a7 7 0 0 1 2.43-1.55zm-3.28 2.55h2.2c-.25.9-.4 1.9-.44 3h-2.94a6.95 6.95 0 0 1 1.18-3zm1.76 4c .03 1.04.17 2.04.38 3h-2.73a6.96 6.96 0 0 1 -.68-3zm-1.02 4h1.66a13.85 13.85 0 0 0 1.04 2.61 7.01 7.01 0 0 1 -3.44-2.61zm6 5.95v3.05h3.5a.5.5 0 1 1 0 1h-7.93a.5.5 0 0 1 0-1h3.43v-3c-2.12 0-4.15-.66-5.89-1.89a.5.5 0 0 1 .58-.82c1.58 1.11 3.4 1.71 5.31 1.71a9 9 0 0 0 9-9c0-3.34-1.83-6.38-4.75-8.07a.5.5 0 0 1 .5-.86c3.22 1.87 5.25 5.23 5.25 8.93 0 5.19-3.95 9.45-9 9.95z" fillRule="evenodd">
              </path>
            </svg>
          </div>
          <button className="footer-button">Terms, Privacy, Currency & More</button>
        </div>
      </div>
    </div>
  )
}

export default App;
