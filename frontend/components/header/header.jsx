import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let headerInfo;
  if (props.currentUser) {
    headerInfo = (
      <div>
        <div className="subheading header-background-image-text">What can we help you find, {props.currentUser.first_name}?</div>
      </div>
    );
  } else {
    headerInfo = (
      <div>
        <div className="header-background"></div>
        <div className="header-info subheading centered-heading">Explore Heirbnb</div>
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
