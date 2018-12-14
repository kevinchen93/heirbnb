class Listing < ApplicationRecord

  validates :host_id, :title, :description, :lat, :lng,
            :guests, :bedrooms, :baths, :beds, :prices, :img_url,
            :address, :city, :state, :country, :zip_code,
            presence: true

  validates :air_conditioning,
            :coffee_maker,
            :bathroom_essentials,
            :indoor_fireplace,
            :first_aid_kit,
            :free_parking,
            :game_console,
            :gym,
            :kitchen,
            :hair_dryer,
            :heating,
            :iron,
            :laptop_friendly_workspace,
            :patio,
            :refrigerator,
            :tv,
            :washer,
            :wifi,
            :self_check_in,

            inclusion: { in: [true, false] }

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

# helper methods

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat].to_f)
    .where("lat > ?", bounds[:southWest][:lat].to_f)
    .where("lng < ?", bounds[:northEast][:lng].to_f)
    .where("lng > ?", bounds[:southWest][:lng].to_f)
  end

  def calculate_average_ratings
    average_rating = 0
    total_count = 0

    self.reviews.each do |review|
      count, rating = 0, 0
      rating_array = [
        review.accuracy,
        review.communication,
        review.cleanliness, 
        review.location,
        review.check_in,
        review.value
      ]

      rating_array.each do |category_rating|
        if category_rating
          count += 1
          rating += category_rating
        end
      end

      rating = rating.to_f / count if count != 0

      if rating != 0
        average_rating += rating
        total_count += 1
      end
    end

    average_rating = average_rating / total_count if total_count != 0

    return average_rating.round(2)
  end

  def booked_dates
    booked = []

    self.bookings.each do |booking|
      check_in = booking.start_date
      check_out = booking.end_date

      while check_in < check_out
        booked << check_in
        check_in += 1
      end
    end

    booked
  end

end
