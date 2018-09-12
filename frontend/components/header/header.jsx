import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let headerInfo;
  if (props.currentUser) {
    headerInfo = (
      <div>
        <h2>What can we help you find, {props.currentUser.first_name}?</h2>
      </div>
    );
  } else {
    headerInfo = (
      <div>
        <h2>Explore Heirbnb</h2>
        <Link to='/signup'>Sign Up</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>
        <Link to="/">Heirbnb</Link>
      </h1>
      {headerInfo}
    </div>
  );
}

export default Header;
