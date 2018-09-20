export const userListings = (state) => {
  let reviews;
  if (state.session) {
    const user = state.entities.users[state.session.id];
    listings = user.listing_ids.map( id => {
      return (state.entities.listings[id]);
    });
  } else {
    listings = null;
  }

  return listings;
};

export const userBookings = (state) => {
  let bookings;
  if (state.session) {
    const user = state.entities.users[state.session.id];
    bookings = user.review_ids.map( id => {
      return (state.entities.bookings[id]);
    });
  } else {
    reviews = null;
  }

  return reviews;
};

export const userReviews = (state) => {
  let reviews;
  if (state.session) {
    const user = state.entities.users[state.session.id];
    reviews = user.review_ids.map( id => {
      return (state.entities.reviews[id]);
    });
  } else {
    reviews = null;
  }

  return reviews;
};
