import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let headerInfo;
  if (props.currentUser) {
    headerInfo = (
      <div>
        <div className="subheading header-background-image-text" >What can we help you find, {props.currentUser.first_name}?</div>
      </div>
    );
  } else {
    headerInfo = (
      <div>
        
      </div>
    );
  }
  return (
    <div>
      {headerInfo}
      <div className="header-info subheading">Explore Heirbnb</div>
    </div>
  );
}

export default Header;
