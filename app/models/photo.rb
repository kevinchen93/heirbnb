class Photo < ApplicationRecord

  validates :img_url, :poster_id, :listing_id, presence: true

  belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: "User"

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: "Listing"

end
