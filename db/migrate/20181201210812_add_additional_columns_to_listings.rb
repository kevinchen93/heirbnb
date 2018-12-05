class AddAdditionalColumnsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, "address", :string, null: false, default: ""
    change_column :listings, "address", :string, default: nil

    add_column :listings, "city", :string, null: false, default: ""
    change_column :listings, "city", :string, default: nil

    add_column :listings, "state", :string, null: false, default: ""
    change_column :listings, "state", :string, default: nil

    add_column :listings, "country", :string, null: false, default: ""
    change_column :listings, "country", :string, default: nil

    add_column :listings, "zip_code", :string, null: false, default: ""
    change_column :listings, "zip_code", :string, default: nil

    add_column :listings, "air_conditioning", :boolean, null: false, default: false
    change_column :listings, "air_conditioning", :boolean, default: nil

    add_column :listings, "coffee_maker", :boolean, null: false, default: false
    change_column :listings, "coffee_maker", :boolean, default: nil

    add_column :listings, "bathroom_essentials", :boolean, null: false, default: false
    change_column :listings, "bathroom_essentials", :boolean, default: nil

    add_column :listings, "indoor_fireplace", :boolean, null: false, default: false
    change_column :listings, "indoor_fireplace", :boolean, default: nil

    add_column :listings, "first_aid_kit", :boolean, null: false, default: false
    change_column :listings, "first_aid_kit", :boolean, default: nil

    add_column :listings, "free_parking", :boolean, null: false, default: false
    change_column :listings, "free_parking", :boolean, default: nil

    add_column :listings, "game_console", :boolean, null: false, default: false
    change_column :listings, "game_console", :boolean, default: nil

    add_column :listings, "gym", :boolean, null: false, default: false
    change_column :listings, "gym", :boolean, default: nil

    add_column :listings, "kitchen", :boolean, null: false, default: false
    change_column :listings, "kitchen", :boolean, default: nil

    add_column :listings, "hair_dryer", :boolean, null: false, default: false
    change_column :listings, "hair_dryer", :boolean, default: nil

    add_column :listings, "heating", :boolean, null: false, default: false
    change_column :listings, "heating", :boolean, default: nil

    add_column :listings, "iron", :boolean, null: false, default: false
    change_column :listings, "iron", :boolean, default: nil

    add_column :listings, "laptop_friendly_workspace", :boolean, null: false, default: false
    change_column :listings, "laptop_friendly_workspace", :boolean, default: nil

    add_column :listings, "patio", :boolean, null: false, default: false
    change_column :listings, "patio", :boolean, default: nil

    add_column :listings, "refrigerator", :boolean, null: false, default: false
    change_column :listings, "refrigerator", :boolean, default: nil

    add_column :listings, "tv", :boolean, null: false, default: false
    change_column :listings, "tv", :boolean, default: nil

    add_column :listings, "washer", :boolean, null: false, default: false
    change_column :listings, "washer", :boolean, default: nil

    add_column :listings, "wifi", :boolean, null: false, default: false, default: false
    change_column :listings, "wifi", :boolean, default: nil

    add_column :listings, "self_check_in", :boolean, null: false, default: false
    change_column :listings, "self_check_in", :boolean, default: nil
  end
end
