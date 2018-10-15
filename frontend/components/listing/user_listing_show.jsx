import React from 'react';
import { Link } from 'react-router-dom';
import ListingMap from '../listing_map/listing_map';


// /profile/listings

class UserListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
    this.props.userListings();
  }

  render() {
    if (!this.props.userListings().every( el => Boolean(el)) ) {
      return <div>Loading...</div>;
    }

    let userListingHeaderInfo;
    if (this.props.userListings().length > 0) {
      userListingHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">Here are your listings, {this.props.currentUser.first_name}!</div>
        </div>
      );
    } else {
      userListingHeaderInfo = (
        <div>
          <div className="subheading header-background-image-text">You have no listings, {this.props.currentUser.first_name}!</div>
        </div>
      );
    }

    const listings = this.props.userListings().map( listing => {
      return (
        <li key={listing.id} className="user-listing-item-container">
          <Link to={`/profile/listings/${listing.id}`}>
            <img className="listing-image" src={listing.img_url} />
            <div className="listing-content">
              <div className="listing-item-title">{listing.title}</div>
              <div className="listing-item-prices">From ${listing.prices} per night · Free cancellation</div>
            </div>
          </Link>
        </li>
      )
    });

    return (
      <div>
        <div className="user-listing-index-container">
          {userListingHeaderInfo}
          <ul className="user-listing-ul">
            { listings }
          </ul>
          <ListingMap listings={this.props.listings} updateFilter={this.props.updateFilter} />
        </div>
      </div>
    )
  }
}

export default UserListingShow;
