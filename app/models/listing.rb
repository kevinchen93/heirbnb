class Listing < ApplicationRecord

  validates :host_id, :title, :description, :lat, :lng, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: "Users"

  
end
