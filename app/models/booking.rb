class Booking < ApplicationRecord

  validates :guest_id, :listing_id, :start_date, :end_date, presence: true

  has_one :host,
    through: :listing,
    source: :host

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: "User"

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: "Listing"

  has_one :review,
    primary_key: :id,
    foreign_key: :booking_id,
    class_name: "Review"

end
