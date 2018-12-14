json.extract! @listing, :id, :host_id, :title, :description,
                       :lat, :lng,
                       :guests, :bedrooms, :baths, :beds, :prices,
                       :img_url, :review_ids,
                       :address, :city, :state, :country, :zip_code,
                       :air_conditioning,
                       :coffee_maker,
                       :bathroom_essentials,
                       :indoor_fireplace,
                       :first_aid_kit,
                       :free_parking,
                       :game_console,
                       :gym,
                       :kitchen,
                       :hair_dryer,
                       :heating,
                       :iron,
                       :laptop_friendly_workspace,
                       :patio,
                       :refrigerator,
                       :tv,
                       :washer,
                       :wifi,
                       :self_check_in

json.photoUrls @listing.photos.map { |photo| url_for(photo) }
json.booked_dates @listing.booked_dates
json.average_rating @listing.calculate_average_ratings

json.host do
  json.partial! 'api/users/user', user: @listing.host
end


if @listing.reviews.length > 0
 json.reviews do
   @listing.reviews.each do |review|
     json.set! review.id do
       json.partial! 'api/reviews/review', review: review

       json.reviewer do
         json.partial! 'api/users/user', user: review.reviewer
       end
     end
   end
 end
end
