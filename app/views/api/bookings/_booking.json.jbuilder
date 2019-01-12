json.extract! booking, :id, :guest_id, :listing_id, :start_date, :end_date, :num_guests,:review
json.listing do
  json.partial! 'api/listings/listing', listing: booking.listing
end
