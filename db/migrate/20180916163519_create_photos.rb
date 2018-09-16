class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :poster_id, null: false
      t.integer :listing_id, null: false
      t.string :img_url, null: false

      t.timestamps
    end

    add_index :photos, :poster_id
    add_index :photos, :listing_id
  end
end
