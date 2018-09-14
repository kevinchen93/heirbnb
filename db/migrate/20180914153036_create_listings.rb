class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :lat, null: false
      t.string :lng, null: false
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :listings, :host_id
  end
end
