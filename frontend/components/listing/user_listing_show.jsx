import React from 'react';
import { Link } from 'react-router-dom';

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

    if (this.props.userListings().length === 0) {
      return <h1>You have no current listings!</h1>
    }

    const listings = this.props.userListings().map( listing => {
      return (
        <div key={listing.id}>
          <li>
            <Link to={`/profile/listings/${listing.id}`}>
              <img className="listing-image" src={listing.img_url} />
              <div className="listing-content">
                <div className="listing-item-title">{listing.title}</div>
                <div className="listing-item-prices">From ${listing.prices} per night · Free cancellation</div>
              </div>
            </Link>
          </li>
        </div>
      )
    });

    return (
      <div>
        <ul>
          { listings }
        </ul>
      </div>
    )
  }
}

export default UserListingShow;
