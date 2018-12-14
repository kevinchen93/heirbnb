import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { renderStars } from '../stars_show.jsx';
import Slider from 'react-slick';

const ListingIndexItem = ({ listing }) => {
  if (!listing) {
    return <div></div>
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="listing-details-container">
      <Link to={`/listings/${listing.id}`}>
        <Carousel>
          <img src={listing.photoUrls[0]} />
          <img src={listing.photoUrls[1]} />
          <img src={listing.photoUrls[2]} />
          <img src={listing.photoUrls[3]} />
        </Carousel>
      </Link>

      <div className="listing-details-text">
        <Link to={`/listings/${listing.id}`}>
          <div className="listing-title">{listing.title}</div>
        </Link>
        <div className="listing-price">${listing.prices} per night · Free Cancellation · Superhost </div>
        <div className="listing-detail-rating">{renderStars(listing.average_rating)}
          <p>{listing.num_reviews}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingIndexItem;
