class Booking < ApplicationRecord

  validates :guest_id, :listing_id, :start_date, :end_date, presence: true

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: "Users"

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: "Listing"

end
