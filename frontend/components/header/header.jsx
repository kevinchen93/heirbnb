import React from 'react';
import { Link } from 'react-router-dom';
import ListingMap from './../listing_map/listing_map';

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
        <div>
          <div className="subheading header-background-image-text">What can we help you find, {this.props.currentUser.first_name}?</div>
          <ListingMap style={{ position: "absolute" }} listings={this.props.listings} updateFilter={this.props.updateFilter} />
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
}

export default Header;
