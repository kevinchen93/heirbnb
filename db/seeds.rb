# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all
Booking.destroy_all
Review.destroy_all

User.create([
  { first_name: 'Oliver', last_name: 'OSullivan', email: 'oliver@oliver', password: 'password1', img_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7eb3cf84fa5988885f62b3ee0dfac1fe&auto=format&fit=crop&w=1873&q=80' },
  { first_name: 'Jack', last_name: 'Jack', email: 'jack@jack', password: 'password2', img_url: '' },
  { first_name: 'Ava', last_name: 'Smith', email: 'ava@ava', password: 'password3', img_url: '' },
  { first_name: 'Natasha', last_name: 'Williams', email: 'natasha@natasha', password: 'password4', img_url: '' },
  { first_name: 'Evan', last_name: 'Walsh', email: 'evan@evan', password: 'password5', img_url: '' }
]);

Listing.create([
  { host_id: 1, lat: '1', lng: '1', title: 'Nice room', description: 'Loved by all' },
  { host_id: 2, lat: '2', lng: '2', title: 'Nice room with a view', description: 'Sick' },
  { host_id: 3, lat: '3', lng: '3', title: 'Cave house', description: 'Loved by all' },
]);

Booking.create([
  { guest_id: 1, listing_id: 2, start_date: 20180912, end_date: 20180919 },
  { guest_id: 2, listing_id: 1, start_date: 20180913, end_date: 20180920 },
  { guest_id: 3, listing_id: 1, start_date: 20180914, end_date: 20180921 },
]);

Review.create([
  { booking_id: 2, reviewer_id: 2, body: 'Redonkulous!', rating: 5 }
]);
