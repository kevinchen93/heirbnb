class AddIndicesToListings < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, :city
    add_index :listings, :country 
  end
end
