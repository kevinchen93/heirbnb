json.extract! user, :id, :email, :first_name, :last_name,
                    :booking_ids,
                    :listing_ids,
                    :review_ids

if user.profile_photo.attached?
  json.photoUrl url_for(user.profile_photo)
end
