class Review < ApplicationRecord

  validates :booking_id, :reviewer_id, :body, :rating, presence: true
  validates :rating, inclusion: { in: 1..5, },
    message: "%must have a rating" }

  belongs_to :booking,
    primary_key: :id,
    foreign_key: :booking_id,
    class_name: "Booking"

  belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: "User"

end
