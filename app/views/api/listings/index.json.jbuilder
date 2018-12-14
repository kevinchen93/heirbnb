@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :host_id, :title, :description,
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

    json.photoUrls listing.photos.map { |photo| url_for(photo) }
    json.average_rating listing.calculate_average_ratings
    json.num_reviews listing.reviews.length
  end
end
