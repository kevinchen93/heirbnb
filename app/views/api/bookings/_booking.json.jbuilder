json.extract! booking, :id, :guest_id, :listing_id, :start_date, :end_date
json.extract! booking.listing, :host_id, :title, :img_url
