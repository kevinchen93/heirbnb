class Review < ApplicationRecord

  validates :booking_id, :reviewer_id, :body, :rating, presence: true
  validates :rating, inclusion: { in: 1..5, },
    message: "%must have a rating" }

  belongs_to :booking,
    primary_key: :id,
    foreign_key: :booking_id,
    class_name: "Booking"

  has_many :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: "User"


end
