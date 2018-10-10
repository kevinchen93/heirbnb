export const userListings = (state) => {
  let listings = [];
  if (state.session) {
    const user = state.entities.users[state.session.currentUserId];
    if (user.listing_ids.length !== 0) {
      listings = user.listing_ids.map( id => {
        return (state.entities.listings[id]);
      });
    }
  } else {
    listings = null;
  }

  return listings;
};

export const userBookings = (state) => {
  let bookings = [];
  if (state.session) {
    const user = state.entities.users[state.session.currentUserId];
    if (user.booking_ids.length !== 0) {
      bookings = user.booking_ids.map( id => {
        return (state.entities.bookings[id]);
      });
    }
  } else {
    bookings = null;
  }

  return bookings;
};

export const userReviews = (state) => {
  let reviews;
  if (state.session) {
    const user = state.entities.users[state.session.currentUserId];
    reviews = user.reviews.map( id => {
      return (state.entities.reviews[id]);
    });
  } else {
    reviews = null;
  }

  return reviews;
};
