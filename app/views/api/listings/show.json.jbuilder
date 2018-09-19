json.set! 'listing' do
  json.partial! 'api/listings/listing', listing: @listing
end

json.set! 'reviews' do
  @listing.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end

json.set! 'users' do
  @listing.reviews.each do |review|
    json.set! review.reviewer_id do
      json.partial! 'api/users/user', user: review.reviewer
    end
  end
end
