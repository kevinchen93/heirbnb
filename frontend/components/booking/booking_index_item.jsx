import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking, deleteBooking }) => {
  return (
    <li>
      <Link to={`/bookings/${booking.id}`}>
        {booking.title}
      </Link>
      <Link to={`/bookings/${booking.id}/edit`}>&nbsp;
        Edit
      </Link>
      <button onClick={()=> deleteBooking(booking.id)}>Delete</button>
    </li>
  );
};

export default BookingIndexItem;
