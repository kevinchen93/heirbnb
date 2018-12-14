class Review < ApplicationRecord

  validates :body, :rating, presence: true
  validates :rating, inclusion: { in: 1..5,
    message: "must have a rating" }

  belongs_to :booking,
    primary_key: :id,
    foreign_key: :booking_id,
    class_name: "Booking"

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: "Listing"

  belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: "User"

end
