@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'booking', booking: booking
  end

  # if booking.review
  #   json.set! 'review' do
  #     json.set! booking.review do
  #       json.partial! 'api/reviews/review', review: booking.review
  #     end
  #   end
  # end
  #
  # if booking.listing
  #   json.set! 'listing' do
  #     json.set! booking.listing do
  #       json.partial! 'api/listings/listing', listing: booking.listing
  #     end
  #   end
  # end

end
