import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listing, deleteListing }) => {

  return (
    <div>
      <li key={listing.id} className="listing-item-container">
        <Link to={`/listings/${listing.id}`}>
          <img className="listing-image" src={listing.img_url}></img>
          <div className="listing-content">
            <div className="listing-item-title">{listing.title}</div>
            <div className="listing-item-prices">From ${listing.prices} per night · Free cancellation</div>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default ListingIndexItem;
