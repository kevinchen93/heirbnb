import React from 'react';
import { Link } from 'react-router-dom';
import ListingIndexContainer from './../listing/listing_index_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    let headerInfo;
    if (this.props.currentUser) {
      headerInfo = (
        <div className="ml-35">
          <div className="subheading header-background-image-text">What can we help you find, {this.props.currentUser.first_name}?</div>
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
      <div className="listing-index-container">
        {headerInfo}
        <div>
          <ListingIndexContainer />
        </div>
      </div>
    );
  }
}

export default Header;
