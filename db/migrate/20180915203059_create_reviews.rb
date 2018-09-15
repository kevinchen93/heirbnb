class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :booking_id, null: false
      t.integer :reviewer_id, null: false
      t.text :body, null: false
      t.integer :rating, null: false

      t.timestamps
    end

    add_index :reviews, [:booking_id, :reviewer_id], unique: true
  end
end
