class AddListingIdColumnToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, "listing_id", :integer, null: false, default: 0
    change_column :reviews, "listing_id", :integer, default: nil
  end
end
