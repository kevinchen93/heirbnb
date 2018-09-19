import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listing, deleteListing }) => {

  return (
    <div>
      <li key={listing.id} className="listing-item-container">
        <Link to={`/api/listings/${listing.id}`}>
          <div className="listing-image"></div>
          <div className="listing-content">
            <div className="listing-item-title">{listing.title}</div>
            $$$$ per person
          </div>
        </Link>
      </li>
    </div>
  );
};

export default ListingIndexItem;
