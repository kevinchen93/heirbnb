import React from 'react';

export const renderStars = (rating) => {
  const fullStar = <i className= "fa fa-star"></i>;
  const halfStar = <i className= "fas fa-star-half"></i>;
  const emptyStar = <i className= "far fa-star-o"></i>;

  if (rating <= 0.25) {
    return (
      <div className="individual-stars-container">
        {emptyStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 0.25 && rating <= 0.75) {
    return (
      <div className="individual-stars-container">
        {halfStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 0.75 && rating <= 1.25) {
    return (
      <div className="individual-stars-container">
        {fullStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 1.25 && rating <= 1.75) {
    return (
      <div className="individual-stars-container">
        {fullStar}{halfStar}{emptyStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 1.75 && rating <= 2.25) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{emptyStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 2.25 && rating <= 2.75) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{halfStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 2.75 && rating <= 3.25) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{fullStar}{emptyStar}{emptyStar}
      </div>
    )
  } else if (rating > 3.25 && rating <= 3.75) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{fullStar}{halfStar}{emptyStar}
      </div>
    )
  } else if (rating > 3.75 && rating <= 4.25) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{fullStar}{fullStar}{emptyStar}
      </div>)
  } else if (rating > 4.25 && rating <= 4.75) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{fullStar}{fullStar}{halfStar}
      </div>
    )
  } else if (rating > 4.75) {
    return (
      <div className="individual-stars-container">
        {fullStar}{fullStar}{fullStar}{fullStar}{fullStar}
      </div>
    )
  }
}
