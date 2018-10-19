# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TODO:
# have demo user host a few listings

User.destroy_all
Listing.destroy_all
Booking.destroy_all
Review.destroy_all
Photo.destroy_all

users = User.create!([
  { first_name: 'Oliver', last_name: 'Ball', email: 'oliver@oliver', password: 'password1', img_url: '' },
  { first_name: 'Jack', last_name: 'Jack', email: 'jack@jack', password: 'password2', img_url: '' },
  { first_name: 'Ava', last_name: 'Smith', email: 'ava@ava', password: 'password3', img_url: '' },
  { first_name: 'Natasha', last_name: 'Williams', email: 'natasha@natasha', password: 'password4', img_url: '' },
  { first_name: 'Evan', last_name: 'Walsh', email: 'evan@evan', password: 'password5', img_url: '' },
  { first_name: 'Demo', last_name: 'User', email: 'demo@demo', password: 'hunter12', img_url: '' }
]);

listings = Listing.create!([
  { host_id: users[0].id, lat: '40.7827643', lng: '-73.968273', title: 'Central Park View with Private Bath', description: 'Enjoy Central Park views from your bedroom window! This is the ideal room for those who like easy access to the high energy city by day, but prefer to come home to a peaceful, tree-lined neighborhood to get a good night of rest. Please read the whole profile, most of your questions will be answered below! :)', guests: 4, bedrooms: 1, beds: 1, baths: 2, prices: 199, img_url: 'https://a0.muscache.com/im/pictures/fb9a3c6f-a826-451a-ba42-23151380a41b.jpg?aki_policy=xx_large' },
  { host_id: users[1].id, lat: '40.7265831', lng: '-73.9909083', title: 'Sunny, Modern Room in East Village!', description: 'This clean and very comfortable room in the East Village has spectacular views of downtown Manhattan and is a block away from Tompkins Square Park and we are very excited to share our space with you! Thanks for taking a look.', guests: 2, bedrooms: 1, beds: 1, baths: 2, prices: 125, img_url: 'https://a0.muscache.com/im/pictures/37e211bb-6ef8-44b6-8022-7427e7a241a5.jpg?aki_policy=xx_large' },
  { host_id: users[2].id, lat: '40.7241468', lng: '-74.0006856', title: 'Clean Room, Central Location in Manhattan', description: 'This apartment is a 1-minute walk from 3 major subway lines, and centrally-located between midtown and downtown - offering easy access to most of NYC’s tourist attractions. It is situated on the border between the young and stylish East Village/Lower East Side neighborhoods, and just steps from countless inexpensive restaurants, cafes, bars, galleries and shops. A memory-foam bed, Netflix, and recent-renovation provide comfort and complete the authentic New York experience!', guests: 4, bedrooms: 1, beds: 1, baths: 2, prices: 197, img_url: 'https://a0.muscache.com/im/pictures/25305226/499eb92a_original.jpg?aki_policy=xx_large' },

  { host_id: users[3].id, lat: '40.747198', lng: '-74.007082', title: 'GREAT Location in Chelsea!', description: 'Lovely, quiet bedroom in amazing Chelsea location. Close to West Village, Meatpacking, Hell\'s Kitchen, East Village, Times Square - all the best neighborhoods! Very close to the C/E, 1, and F/M lines. Live like a local!', guests: 2, bedrooms: 1, beds: 1, baths: 1, prices: 80, img_url: 'https://a0.muscache.com/im/pictures/6808875/34c6b461_original.jpg?aki_policy=xx_large' },

  { host_id: users[4].id, lat: '40.7514231', lng: '-74.00829', title: '\'The Country\' And The NYC Waterfront!', description: 'This is a comfortable studio apartment with exposed brick that has a true city feeling. This studio has a newly renovate bathroom and kitchen with stainless steel appliances.', guests: 4, bedrooms: 2, beds: 3, baths: 1, prices: 121, img_url: 'https://a0.muscache.com/im/pictures/66285187/1973c1a5_original.jpg?aki_policy=xx_large' },

  { host_id: users[1].id, lat: '40.7441021', lng: '-74.0016947', title: 'Brownstone Studio', description: 'Location, location, location! Large, classy, timeless, comfortable, entire top floor with private entrance in our private house out of a 1890\'s novel in Williamsburg, Brooklyn one block from the East River. So easy to get to Manhattan by subway, ferry, cab or even foot, and all the best places in the "Burg" Wifi/cableTV/air/heat. (We stay in our separate floor below you never compromising your privacy!)', guests: 4, bedrooms: 1, beds: 3, baths: 1, prices: 195, img_url: 'https://a0.muscache.com/im/pictures/c3ea4623-9f14-44d8-9426-ef58d3bd8acf.jpg?aki_policy=xx_large' },

]);

bookings = Booking.create!([
  { guest_id: users[0].id, listing_id: listings[1].id, start_date: 20160912, end_date: 20160919 },
  { guest_id: users[0].id, listing_id: listings[2].id, start_date: 201670920, end_date: 20160927 },
  { guest_id: users[0].id, listing_id: listings[3].id, start_date: 20161013, end_date: 20161020 },
  { guest_id: users[0].id, listing_id: listings[4].id, start_date: 20161102, end_date: 20161109 },

  { guest_id: users[1].id, listing_id: listings[2].id, start_date: 20170913, end_date: 20170920 },
  { guest_id: users[1].id, listing_id: listings[3].id, start_date: 20170921, end_date: 20170928 },
  { guest_id: users[1].id, listing_id: listings[3].id, start_date: 20171013, end_date: 20171020 },
  { guest_id: users[1].id, listing_id: listings[4].id, start_date: 20171102, end_date: 20171109 },

  { guest_id: users[2].id, listing_id: listings[0].id, start_date: 20180913, end_date: 20180920 },
  { guest_id: users[2].id, listing_id: listings[1].id, start_date: 20180921, end_date: 20180928 },
  { guest_id: users[2].id, listing_id: listings[3].id, start_date: 20181013, end_date: 20181020 },
  { guest_id: users[2].id, listing_id: listings[4].id, start_date: 20181102, end_date: 20181109 },
  { guest_id: users[2].id, listing_id: listings[5].id, start_date: 20181110, end_date: 20181117 },

  { guest_id: users[3].id, listing_id: listings[0].id, start_date: 20190913, end_date: 20190920 },
  { guest_id: users[3].id, listing_id: listings[1].id, start_date: 20190921, end_date: 20190928 },
  { guest_id: users[3].id, listing_id: listings[2].id, start_date: 20191013, end_date: 20191020 },
  { guest_id: users[3].id, listing_id: listings[4].id, start_date: 20191102, end_date: 20191109 },
  { guest_id: users[3].id, listing_id: listings[5].id, start_date: 20191109, end_date: 20191116 },
]);

reviews = Review.create!([
  { booking_id: bookings[0].id, reviewer_id: users[0].id, body: 'When you go to NYC, you’ll want to find a place that’s conveniently located but won’t break the bank. We found that and more with Jack. He was a great host. VERY helpful with advice and tips for us on our very first trip to NYC. Sure the room is small, but the bed was very comfortable and the A/C blew hard and cold. Sharing the common space and bathroom with the other room\'s guests was not a big deal. In fact, I enjoyed having others there with which we could compare ideas and opinions on what to see when and how. After my first trip to NYC I can truly say, “I love NY” and Jack and his little room helped make that true!', rating: 5 },
  { booking_id: bookings[1].id, reviewer_id: users[0].id, body: 'Ava\'s place is very conveniently located, sparkling clean, the bed is comfortable, the AC works well. Ava is very friendly and easy to reach with any questions. We had a great time staying at her place!', rating: 5 },
  { booking_id: bookings[2].id, reviewer_id: users[0].id, body: 'Easy check-in, great location near train, quiet, fantastic for a quick trip. Although there were others in the unit, we rarely interacted and had no issues! Book this if you’re looking for a hassle free, simple place to lay your head after a day of exploring NYC.', rating: 5 },
  { booking_id: bookings[3].id, reviewer_id: users[0].id, body: 'Evan’s place is just what we were hoping for our stay in Williamsburg. The apartment has just the right “patina” for its age and it is stylishly appointed. He really has thought of everything! Great touches and conveniences throughout down to reusable grocery bags and plenty of hangars. The rooftop was a definite perk with nice views. There about a million “3rd wave” coffee places within a stone’s throw and Domino Park right across the street is jaw droppingly amazing with its views of Manhattan. Loved everything!', rating: 5 },


  { booking_id: bookings[4].id, reviewer_id: users[1].id, body: 'We had a great experience staying at Ava\'s place. Her space is clean and convenient, located right in the East Village a few minutes\' walk from the stylish restaurant Beauty and Essex. Her apartment was impeccably well-kemp, the room containing towels, plenty of pillows, and a large closet. She was a great host, making sure to stay in contact throughout our stay. Great place to call a home base in the big city. Would definitely recommend!', rating: 5 },
  { booking_id: bookings[5].id, reviewer_id: users[1].id, body: 'Natasha\'s place was a great place for us to spend a night. It is walking distance to Penn Station, which is where we arrived in the city so that was very helpful. The check-in/out instructions are very clear and make the entire process painless. We loved the location as well. If you need somewhere to stay in Chelsea, i would recommend Natasha\'s place.', rating: 5 },
  { booking_id: bookings[6].id, reviewer_id: users[1].id, body: 'Great neighborhood. Pristine. Private. Affordable. Courteous, responsive hosts. You must be able to carry your luggage up 90 steps and climb those same 90 steps every time you want to go to your room. Go some place and climb 90 steps.', rating: 5 },
  { booking_id: bookings[7].id, reviewer_id: users[1].id, body: 'Lovely location near the river. Very comfortable bed! Great coffee shop across the street. I would definitely stay here again.', rating: 5 },

  { booking_id: bookings[8].id, reviewer_id: users[2].id, body: 'Jack\'s place is just as described - no surprises! The room is comfortable and, with its bath, private from the rest of the apartment. The location is perfect - accessible to almost anywhere! And it\'s right on the park which makes a morning walk around the Meer a must do! I\'ll look forward to coming back.!', rating: 5 },
  { booking_id: bookings[9].id, reviewer_id: users[2].id, body: 'Beautiful place with sunshine, plants and a fantastic patio with a view of Lower Manhattan.', rating: 5 },
  { booking_id: bookings[10].id, reviewer_id: users[2].id, body: 'Excellent location, super clean apartment, quiet complex. There isn’t much direct interaction with the hosts, but they give very explicit instructions for everything so the whole process is easy. I would definitely recommend this place to anyone looking to stay in NYC — Natasha and Adam do a great job of ensuring everything is in order!', rating: 5 },
  { booking_id: bookings[11].id, reviewer_id: users[2].id, body: 'Highly recommend this place. Very good location. Amazing views of Manhattan. Nice restaurants nearby. Great rooftop views. Nice size place. Clean and comfortable.', rating: 5 },
  { booking_id: bookings[12].id, reviewer_id: users[2].id, body: 'This home was beautiful. Right within walking distance to the train and a bunch of delicious places to eat. It was my first time in New York and Jack made me feel right at home. I hope to stay here again some day soon', rating: 5 },



  { booking_id: bookings[13].id, reviewer_id: users[3].id, body: 'This apartment is definitely not worth what the owner is charging. The location is great, and host was easy to communicate with, but the apartment itself is very old and unkept. The bedside light in the room is held together with tape and doesn\'t work, the rug in the bathroom and chair in the bedroom are stained and dirty, there was hair from a previous guest on the bathroom floor, and the linens on the bed look old and well-worn. We only stayed one night so not a big deal, but for what he is charging for this space, I would not recommend staying here.', rating: 2 },
  { booking_id: bookings[14].id, reviewer_id: users[3].id, body: 'Jack is a great host that goes out of his way to accommodate your needs be it with check in or check out. He is very flexible, his communication response is very fast, thorough and accurate, and very pleasant.', rating: 5 },
  { booking_id: bookings[15].id, reviewer_id: users[3].id, body: 'Thanks Ava! The room was very clean and in a great location. Ava gave us keys so we could come and go as we pleased and the noon check out was great for sleeping in. We really appreciated the ability to drop our bags off before the check in time, which we didn’t have to use, but it was nice to not have to worry about lugging our bags around NYC. Very nice!', rating: 5 },
  { booking_id: bookings[16].id, reviewer_id: users[3].id, body: 'An amazing, feel like home getaway in beautiful Williamsburg, this apartment is bright, cheery, easy and local to so many things to explore in Brooklyn and Manhattan. This our second time staying here and it only gets even better each time, feeling like we’re residents in the neighborhood and moving through the area with ease. A special call-out to Evan who is exceptional and so helpful, upbeat, caring and just there when needed. He had great recs for dining and overall information about the apartment and area. We loved his energy and care!', rating: 5 },
  { booking_id: bookings[17].id, reviewer_id: users[3].id, body: 'Fantastic, clean, comfortable spot in Brooklyn. Only a short stroll from the subway, and close to several good options for food, drinks, and groceries. The neighborhood is gorgeous and worthy of many long walks.', rating: 5 },
]);

photos = Photo.create!([
  { poster_id: users[0].id, listing_id: listings[0].id, img_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7eb3cf84fa5988885f62b3ee0dfac1fe&auto=format&fit=crop&w=1873&q=80' }
]);
