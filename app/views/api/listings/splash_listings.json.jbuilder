@listings_hash.each do |city, listings|
  json.set! city do
    listings.each do |listing|
      json.set! listing.id do
        json.extract! listing, :id, :title, :city, :prices
        json.photoUrls listing.photos.map { |photo| url_for(photo) }
        json.average_rating listing.calculate_average_ratings
        json.num_reviews listing.reviews.length
      end
    end
  end
end
