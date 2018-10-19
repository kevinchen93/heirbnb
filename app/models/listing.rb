class Listing < ApplicationRecord

  validates :host_id, :title, :description, :lat, :lng, :guests, :bedrooms, :baths, :beds, :prices, :img_url, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: "User"

  has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: "Booking"

  has_many :reviews,
    through: :bookings,
    source: :review

  has_many :photos,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: "Photo"

  has_many_attached :photos

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng < ?", bounds[:northEast][:lng])
        .where("lng > ?", bounds[:southWest][:lng])
  end
end
