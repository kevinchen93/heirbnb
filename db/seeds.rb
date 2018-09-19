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
Photo.destroy_all

users = User.create!([
  { first_name: 'Oliver', last_name: 'OSullivan', email: 'oliver@oliver', password: 'password1', img_url: '' },
  { first_name: 'Jack', last_name: 'Jack', email: 'jack@jack', password: 'password2', img_url: '' },
  { first_name: 'Ava', last_name: 'Smith', email: 'ava@ava', password: 'password3', img_url: '' },
  { first_name: 'Natasha', last_name: 'Williams', email: 'natasha@natasha', password: 'password4', img_url: '' },
  { first_name: 'Evan', last_name: 'Walsh', email: 'evan@evan', password: 'password5', img_url: '' },
  { first_name: 'Demo', last_name: 'User', email: 'demo@demo', password: 'hunter12', img_url: '' }
]);

listings = Listing.create!([
  { host_id: users[0].id, lat: '1', lng: '1', title: 'Entire Loft', description: '10 guests, 3 bedrooms, 3 beds, 2 baths, 2500 square feet TriBeCa loft with 13-feet exposed beam ceilings, hardwood floors and over-sized windows. Three bedrooms, two bathrooms, large kitchen, washer/dryer, art, and modern furnishings. We own our building, live on the premises, and are available for assistance at all times. We are in compliance with all local and state rent laws. From $450 per night' },
  { host_id: users[1].id, lat: '2', lng: '2', title: 'Nice Room With A View', description: 'Sick, From $130 per night' },
  { host_id: users[2].id, lat: '3', lng: '3', title: 'Cave House', description: 'Loved by all, From $197 per night' },
  { host_id: users[3].id, lat: '4', lng: '4', title: 'Entire Apartment', description: 'Cozy apartment perfect situation - metro & WIFI, From $195 per night' },
  { host_id: users[4].id, lat: '5', lng: '5', title: '\'The Country\' And The NYC Waterfront!', description: '4 guests, 1 studio, 1 bed, 1 bath, This is a comfortable studio apartment with exposed brick that has a true city feeling. This studio has a newly renovate bathroom and kitchen with stainless steel appliances., From $121 per night' },
  { host_id: users[3].id, lat: '5', lng: '5', title: 'Brownstone Studio', description: '4 guests, 2 studio, 3 bed, 1 bath, Location, location, location! Large, classy, timeless, comfortable, entire top floor with private entrance in our private house out of a 1890\'s novel in Williamsburg, Brooklyn one block from the East River. So easy to get to Manhattan by subway, ferry, cab or even foot, and all the best places in the "Burg" Wifi/cableTV/air/heat. (We stay in our separate floor below you never compromising your privacy!), From $121 per night' },

]);

bookings = Booking.create!([
  { guest_id: users[0].id, listing_id: listings[1].id, start_date: 20180912, end_date: 20180919 },
  { guest_id: users[1].id, listing_id: listings[0].id, start_date: 20180913, end_date: 20180920 },
  { guest_id: users[2].id, listing_id: listings[0].id, start_date: 20180914, end_date: 20180921 },
  { guest_id: users[3].id, listing_id: listings[4].id, start_date: 20180914, end_date: 20180921 },
]);

reviews = Review.create!([
  { booking_id: bookings[1].id, reviewer_id: users[0].id, body: 'Amazing!', rating: 5 },
  { booking_id: bookings[1].id, reviewer_id: users[1].id, body: 'The location was great and the price was right. It saved us from spending hundreds more on getting 2 NYC hotel rooms. We enjoyed getting to meet the very friendly hosts and I’m a big fan of the modern style and furnishings in their apartment. Thanks again.!', rating: 5 },
  { booking_id: bookings[1].id, reviewer_id: users[2].id, body: 'Best neighborhood in Manhattan for independent coffee shops, cozy wine bars, up-and-coming restaurants (the area has 4 out of the top 10 best places to eat in this years NY magazine list) , intimate music venues, and interesting owner-operated shops. Like no other area in the city. A very peaceful cool neighborhood, yet just a short trip to all the action!', rating: 5 },
  { booking_id: bookings[3].id, reviewer_id: users[3].id, body: 'Maria’s place is just what we were hoping for our stay in Williamsburg. The apartment has just the right “patina” for its age and it is stylishly appointed. She really has thought of everything! Great touches and conveniences throughout down to reusable grocery bags and plenty of hangars. The rooftop was a definite perk with nice views. There about a million “3rd wave” coffee places within a stone’s throw and Domino Park right across the street is jaw droppingly amazing with its views of Manhattan. Loved everything!', rating: 5 },
]);

photos = Photo.create!([
  { poster_id: users[0].id, listing_id: listings[0].id, img_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7eb3cf84fa5988885f62b3ee0dfac1fe&auto=format&fit=crop&w=1873&q=80' }
])
