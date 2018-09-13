import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let headerInfo;
  if (props.currentUser) {
    headerInfo = (
      <div>
        <div className="subheading">What can we help you find, {props.currentUser.first_name}?</div>
        <button onClick={props.logout}>Log out</button>
      </div>
    );
  } else {
    headerInfo = (
      <div>
        <div className="header-info subheading">Explore Heirbnb</div>
        <Link to='/signup'>Sign up</Link>
        <br />
        <Link to='/login'>Log in</Link>
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
