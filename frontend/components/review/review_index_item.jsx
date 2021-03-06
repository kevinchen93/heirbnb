import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review, reviewer, deleteReview }) => {
  return (
    <li>
      <Link to={`/reviews/${review.id}`}>
        {review.reviewer_id} {review.reviewer.first_name}
      </Link>
      <Link to={`/reviews/${review.id}/edit`}>&nbsp;
        Edit
      </Link>
      <button onClick={()=> deleteReview(review.id)}>Delete</button>
    </li>
  );
};

export default ReviewIndexItem;
