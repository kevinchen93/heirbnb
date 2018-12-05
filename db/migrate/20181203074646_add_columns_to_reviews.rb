class AddColumnsToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, "accuracy", :integer, null: false, default: 5
    change_column :reviews, "accuracy", :integer, default: nil

    add_column :reviews, "communication", :integer, null: false, default: 5
    change_column :reviews, "communication", :integer, default: nil

    add_column :reviews, "cleanliness", :integer, null: false, default: 5
    change_column :reviews, "cleanliness", :integer, default: nil

    add_column :reviews, "location", :integer, null: false, default: 5
    change_column :reviews, "location", :integer, default: nil

    add_column :reviews, "check_in", :integer, null: false, default: 5
    change_column :reviews, "check_in", :integer, default: nil

    add_column :reviews, "value", :integer, null: false, default: 5
    change_column :reviews, "value", :integer, default: nil
  end
end
