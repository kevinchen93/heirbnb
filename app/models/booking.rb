class Booking < ApplicationRecord

  validates :guest_id, :listing_id, :start_date, :end_date, presence: true
  validate :ensure_no_conflicts

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

# checks if any day from that listing's current booking is already booked
  def ensure_no_conflicts
    date = self.start_date

    while(date <= self.end_date)
      if self.listing.booked_dates.include?(date)
        errors[:Request] << 'conflicts with existing bookings'
        return
      end

      date += 1
    end

  end

end
