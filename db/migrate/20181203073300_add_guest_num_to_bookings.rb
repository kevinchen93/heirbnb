class AddGuestNumToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, "num_guests", :integer, null: false, default: 1
    change_column :bookings, "num_guests", :integer, default: nil
  end
end
