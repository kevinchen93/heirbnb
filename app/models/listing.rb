class Listing < ApplicationRecord

  validates :host_id, :title, :description, :lat, :lng, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: "Users"

  has_many :bookings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: "Booking"

  has_many :reviews,
    through: :bookings,
    source: :review

end
