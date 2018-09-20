class AddColumnsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :guests, :integer, default: 1, null: false
    add_column :listings, :bedrooms, :integer, default: 1, null: false
    add_column :listings, :beds, :integer, default: 1, null: false
    add_column :listings, :baths, :integer, default: 1, null: false
    add_column :listings, :prices, :integer, default: 1, null: false
    add_column :listings, :img_url, :string, default: 1, null: false
  end
end
