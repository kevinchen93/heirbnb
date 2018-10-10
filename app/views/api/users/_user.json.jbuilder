json.extract! user, :id, :email, :first_name, :last_name, :img_url, :booking_ids, :listing_ids, :review_ids

json.listings user.listings.pluck(:id)
json.bookings user.bookings.pluck(:id)
json.reviews user.reviews.pluck(:id)
