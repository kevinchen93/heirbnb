class RemoveImgUrlFromListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :img_url, :string
  end
end
