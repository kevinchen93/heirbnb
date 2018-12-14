import React from 'react';

const splashItems = ({ img, numHomes, city, description }) => {
  return(
    <div className="splash-detail-container">
      <div>
        <img src={img} style={{objectFit: 'contain'}}/>
      </div>
      <div className="item-text-container">
        <div className="home-number">{numHomes} VERIFIED HOMES</div>
        <div className="city-name">{city}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  )
};

export default splashItems;
