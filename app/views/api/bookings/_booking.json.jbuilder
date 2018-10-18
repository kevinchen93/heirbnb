json.extract! booking, :id, :guest_id, :listing_id, :start_date, :end_date, :review
json.extract! booking.listing, :host_id, :title, :img_url
