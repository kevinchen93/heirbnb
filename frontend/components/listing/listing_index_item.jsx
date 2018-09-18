import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listing, deleteListing }) => {

  return (
      <li key={listing.id} className="listing-item-container">
        <Link to={`/api/listings/${listing.id}`}>
        <div className="listing-image"></div>
        <div className="listing-content">
          <div className="listing-item-title">{listing.title}</div>
        </div>
      </Link>
      </li>
  );
};

export default ListingIndexItem;
