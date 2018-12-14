@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'api/bookings/booking', booking: booking

    json.host do
      json.partial! 'api/users/user', user: booking.listing.host
    end

    json.listing do
      json.partial! 'api/listings/listing', listing: booking.listing
    end
  end
end
