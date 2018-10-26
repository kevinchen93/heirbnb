class ChangeListingLatLngDataTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :lat, :float
    remove_column :listings, :lng, :float
  end
end
