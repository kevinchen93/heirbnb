class AddLatLngColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :lat, :float
    add_column :listings, :lng, :float
  end
end
