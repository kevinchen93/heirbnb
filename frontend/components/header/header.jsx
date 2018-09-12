import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let headerInfo;
  if (props.currentUser) {
    headerInfo = (
      <div>
        <div className="subheading">What can we help you find, {props.currentUser.first_name}?</div>
      </div>
    );
  } else {
    headerInfo = (
      <div>
        <div className="header-info">Explore Airbnb</div>
        <Link to='/signup'>Sign Up</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    );
  }
  return (
    <div>
      {headerInfo}
    </div>
  );
}

export default Header;
