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

# USERS
demo = User.create!(first_name: 'Demo', last_name: 'User', email: 'demo@demo', password: 'password');
stephen = User.create!(first_name: 'Stephen', last_name: 'Curry', email: 'stephen@stephen', password: 'password');
kevin = User.create!(first_name: 'Kevin', last_name: 'Curry', email: 'kevin@kevin', password: 'password');
claire = User.create!(first_name: 'Claire', last_name: 'Kim', email: 'claire@claire', password: 'password');
andre = User.create!(first_name: 'Andre', last_name: 'Chow', email: 'andre@andre', password: 'password');
james = User.create!(first_name: 'James', last_name: 'Ham', email: 'james@james', password: 'password');
kyle = User.create!(first_name: 'Kyle', last_name: 'Shanks', email: 'kyle@kyle', password: 'password');
klay = User.create!(first_name: 'Klay', last_name: 'Thompson', email: 'klay@klay', password: 'password');
bosco = User.create!(first_name: 'Bosco', last_name: 'Wong', email: 'bosco@bosco', password: 'password');
grace = User.create!(first_name: 'Grace', last_name: 'Chan', email: 'grace@grace', password: 'password');

user_photo_demo = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/demo.png');

user_photo_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_1.png');
user_photo_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_2.png');
user_photo_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_3.png');
user_photo_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_4.png');
user_photo_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_5.png');
user_photo_6 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_6.png');
user_photo_7 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_7.png');
user_photo_8 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_8.png');
user_photo_9 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/users/user_9.png');

demo.profile_photo.attach(io: user_photo_demo, filename: 'demo.png');

stephen.profile_photo.attach(io: user_photo_1, filename: 'user_photo_1.png');
kevin.profile_photo.attach(io: user_photo_2, filename: 'user_photo_2.png');
claire.profile_photo.attach(io: user_photo_3, filename: 'user_photo_3.png');
andre.profile_photo.attach(io: user_photo_4, filename: 'user_photo_4.png');
james.profile_photo.attach(io: user_photo_5, filename: 'user_photo_5.png');
kyle.profile_photo.attach(io: user_photo_6, filename: 'user_photo_6.png');
klay.profile_photo.attach(io: user_photo_7, filename: 'user_photo_7.png');
bosco.profile_photo.attach(io: user_photo_8, filename: 'user_photo_8.png');
grace.profile_photo.attach(io: user_photo_9, filename: 'user_photo_9.png');

# NEW YORK PHOTOS

# "The Country" & the NYC Waterfront!
ny1_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_1-1.jpg');
ny1_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_1-2.jpg');
ny1_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_1-3.jpg');
ny1_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_1-4.jpg');
ny1_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_1-5.jpg');

# SoHo 2 Bedroom Private Terrace
ny2_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_2-1.jpg');
ny2_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_2-2.jpg');
ny2_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_2-3.jpg');
ny2_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_2-4.jpg');
ny2_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_2-5.jpg');

# A Romantic Loft plus terrace Heart of Manhattan
ny3_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_3-1.jpg');
ny3_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_3-2.jpg');
ny3_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_3-3.jpg');
ny3_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_3-4.jpg');
ny3_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_3-5.jpg');

# Sunny, Modern room in East Village!
ny4_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_4-1.jpg');
ny4_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_4-2.jpg');
ny4_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_4-3.jpg');
ny4_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_4-4.jpg');
ny4_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_4-5.jpg');

# Times Square Luxury Place
ny5_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_5-1.jpg');
ny5_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_5-2.jpg');
ny5_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_5-3.jpg');
ny5_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_5-4.jpg');
ny5_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_5-5.jpg');

# Soho loft with massive couch for extra sleepers!
ny6_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_6-1.jpg');
ny6_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_6-2.jpg');
ny6_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_6-3.jpg');
ny6_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_6-4.jpg');
ny6_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_6-5.jpg');

# Nice studio in Midtown Manhattan
ny7_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_7-1.jpg');
ny7_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_7-2.jpg');
ny7_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_7-3.jpg');
ny7_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_7-4.jpg');
ny7_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_7-5.jpg');

# Spacious Manhattan Apartment near Central Park
ny8_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_8-1.jpg');
ny8_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_8-2.jpg');
ny8_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_8-3.jpg');
ny8_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_8-4.jpg');
ny8_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/new-york-listings/new_york_8-5.jpg');

# CHICAGO PHOTOS

# Wake up to Skyscraper Views at a Bespoke Central Studio
chicago1_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_1-1.jpg');
chicago1_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_1-2.jpg');
chicago1_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_1-3.jpg');
chicago1_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_1-4.jpg');
chicago1_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_1-5.jpg');

# Sophisticated Flat in Historic Building
chicago2_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_2-1.jpg');
chicago2_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_2-2.jpg');
chicago2_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_2-3.jpg');
chicago2_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_2-4.jpg');
chicago2_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_2-5.jpg');

# Light Filled Loft Apartment near Downtown Chicago
chicago3_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_3-1.jpg');
chicago3_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_3-2.jpg');
chicago3_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_3-3.jpg');
chicago3_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_3-4.jpg');
chicago3_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_3-5.jpg');

# Modern Apartment in Historic Greystone Home
chicago4_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_4-1.jpg');
chicago4_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_4-2.jpg');
chicago4_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_4-3.jpg');
chicago4_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_4-4.jpg');
chicago4_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_4-5.jpg');

# Modern Logan Square Apartment near Public Transit
chicago5_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_5-1.jpg');
chicago5_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_5-2.jpg');
chicago5_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_5-3.jpg');
chicago5_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_5-4.jpg');
chicago5_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_5-5.jpg');

# Visit Restaurants from a Renovated Townhouse in Logan Square
chicago6_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_6-1.jpg');
chicago6_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_6-2.jpg');
chicago6_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_6-3.jpg');
chicago6_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_6-4.jpg');
chicago6_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_6-5.jpg');

# Eclectic and Colorful Retro Apartment near Logan Square
chicago7_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_7-1.jpg');
chicago7_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_7-2.jpg');
chicago7_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_7-3.jpg');
chicago7_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_7-4.jpg');
chicago7_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_7-5.jpg');

# Lounge in a Luxury Loft near Wrigley Field
chicago8_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_8-1.jpg');
chicago8_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_8-2.jpg');
chicago8_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_8-3.jpg');
chicago8_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_8-4.jpg');
chicago8_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/chicago-listings/chicago_8-5.jpg');

# LOS ANGELES PHOTOS

# Bike Around Town from the Sweetest Cottage in Venice Beach
la1_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_1-1.jpg');
la1_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_1-2.jpg');
la1_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_1-3.jpg');
la1_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_1-4.jpg');
la1_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_1-5.jpg');

# Walk to Venice Beach from a Bright, Artistic Loft
la2_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_2-1.jpg');
la2_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_2-2.jpg');
la2_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_2-3.jpg');
la2_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_2-4.jpg');
la2_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_2-5.jpg');

# Sweet Spot Garden Pool Studio Guesthouse Walk to West Third St
la3_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_3-1.jpg');
la3_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_3-2.jpg');
la3_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_3-3.jpg');
la3_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_3-4.jpg');
la3_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_3-5.jpg');

# Hollywood Hills Large Modern Room in New House
la4_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_4-1.jpg');
la4_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_4-2.jpg');
la4_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_4-3.jpg');
la4_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_4-4.jpg');
la4_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_4-5.jpg');

# Lofty Stay
la5_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_5-1.jpg');
la5_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_5-2.jpg');
la5_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_5-3.jpg');
la5_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_5-4.jpg');
la5_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_5-5.jpg');

# Private Modern Guesthouse near Beverly Hills
la6_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_6-1.jpg');
la6_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_6-2.jpg');
la6_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_6-3.jpg');
la6_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_6-4.jpg');
la6_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_6-5.jpg');

# Rock and Retro-Inspired Home in Silver Lake
la7_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_7-1.jpg');
la7_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_7-2.jpg');
la7_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_7-3.jpg');
la7_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_7-4.jpg');
la7_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_7-5.jpg');

# Private Master Suite in Modern, Renovated Bungalow
la8_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_8-1.jpg');
la8_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_8-2.jpg');
la8_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_8-3.jpg');
la8_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_8-4.jpg');
la8_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/los-angeles-listings/los_angeles_8-5.jpg');

# SAN FRANCISCO PHOTOS

# Contemporary Apartment in Potrero Hill
sf1_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_1-1.jpg');
sf1_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_1-2.jpg');
sf1_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_1-3.jpg');
sf1_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_1-4.jpg');
sf1_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_1-5.jpg');

# Relax on the Deck of a Bold Victorian Townhouse
sf2_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_2-1.jpg');
sf2_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_2-2.jpg');
sf2_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_2-3.jpg');
sf2_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_2-4.jpg');
sf2_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_2-5.jpg');

# Retreat in a Roomy Apartment in Mission Dolores / Castro
sf3_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_3-1.jpg');
sf3_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_3-2.jpg');
sf3_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_3-3.jpg');
sf3_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_3-4.jpg');
sf3_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_3-5.jpg');

# Room in Elegant, Private, Serene House with Beautiful Furnishings
sf4_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_4-1.jpg');
sf4_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_4-2.jpg');
sf4_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_4-3.jpg');
sf4_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_4-4.jpg');
sf4_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_4-5.jpg');

# Recharge in Lush Gardens in the Heart of Bernal Heights
sf5_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_5-1.jpg');
sf5_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_5-2.jpg');
sf5_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_5-3.jpg');
sf5_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_5-4.jpg');
sf5_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_5-5.jpg');

# Serene, Japanese-Inspired Room in House near Twin Peaks
sf6_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_6-1.jpg');
sf6_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_6-2.jpg');
sf6_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_6-3.jpg');
sf6_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_6-4.jpg');
sf6_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_6-5.jpg');

# Quiet, Colorful Modern Apartment with Garden Patio
sf7_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_7-1.jpg');
sf7_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_7-2.jpg');
sf7_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_7-3.jpg');
sf7_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_7-4.jpg');
sf7_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_7-5.jpg');

# Explore the City from a Room in a Cali-Cool Apartment
sf8_1 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_8-1.jpg');
sf8_2 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_8-2.jpg');
sf8_3 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_8-3.jpg');
sf8_4 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_8-4.jpg');
sf8_5 = EzDownload.open('https://s3.amazonaws.com/heirbnb-prod/san-francisco-listings/san_francisco_8-5.jpg');


# NY
ny_listing1 = Listing.create!(
  host_id: demo.id,
  title: '\'The Country\' And The NYC Waterfront!',
  description: 'Location, location, location! Large, classy, timeless, comfortable, entire top floor with private entrance in our private house out of a 1890\'s novel in Williamsburg, Brooklyn one block from the East River. So easy to get to Manhattan by subway, ferry, cab or even foot, and all the best places in the "Burg" Wifi/cableTV/air/heat. (We stay in our separate floor below you never compromising your privacy!)',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  prices: 175,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.751423,
  lng: -74.008294,
  address: "11 E 26th St",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10010",
  air_conditioning: true,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
);

ny_listing2 = Listing.create!(
  host_id: andre.id,
  title: 'SoHo 2 Bedroom Private Terrace',
  description: 'Soho is the most chic neighborhood in Manhattan and possibly the world. The architecture, the people watching, the shopping and restaurants need no introduction. Even if you don\'t end up staying with me definitely stay somewhere else in Soho. Don\'t be fooled by second rate neighborhoods. Better to stay in a less expensive place in the best location than vice versa.',
  guests: 5,
  bedrooms: 2,
  beds: 3,
  baths: 2,
  prices: 100,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.723027,
  lng: -73.998941,
  address: "532 Broadway",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10012",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: true,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: true,
  refrigerator: true,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: false
);

ny_listing3 = Listing.create!(
  host_id: claire.id,
  title: 'A Romantic Loft plus terrace Heart of Manhattan',
  description: 'It\'s in a unique multi-ethnic landmark/historic neighborhood that took me one year to find! One block away from the amazing saraghina, its restaurant, bakery and wine bar and near bar lunatico that offers live music every evening!',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 94,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.726279,
  lng: -73.999134,
  address: "158 Wooster St",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10012",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: true,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
);

ny_listing4 = Listing.create!(
  host_id: kyle.id,
  title: 'Sunny, Modern Room in East Village!',
  description: 'Walk to everything! Located next to the metro. Steps from CVS, restaurants, bars, and rooftops. Pershing Square Park across the street hosts farmers markets, summer concerts, and winter ice skating. Rooftop pool and spa with 360-degree views of DTLA.',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 239,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.726583,
  lng: -73.990908,
  address: "171 1st Avenue",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10003",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: true,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
);

ny_listing5 = Listing.create!(
  host_id: klay.id,
  title: 'Times Square Luxury Place',
  description: 'Beautifuly designed apartment in Times Square, perfect for three guests to enjoy New York to the fullest. Clean, bright and comfortable space with its own bathroom. Close to every cool area to see when visiting the city.',
  guests: 3,
  bedrooms: 2,
  beds: 1,
  baths: 1,
  prices: 110,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.758776,
  lng: -73.985667,
  address: "4 Times Square",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10036",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: true,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
);

ny_listing6 = Listing.create!(
  host_id: stephen.id,
  title: 'Soho loft with massive couch for extra sleepers!',
  description: 'Awesome spot in the heart of Soho/Nolita. View of Freedom Tower from bedroom window! The place is close to Noho, Bowery and the LES. Close to Sweet & Vicious, Mother\'s Ruin, Katz\'s Delicatessen, Clinton St. Baking Company, La Esquina, Vig Bar, Milk Bar, Prince Street Pizza. You’ll love my place because of the neighborhood and the comfy bed, a luxury mattress from Tomorrow Sleep. My place is good for couples, solo adventurers, business travelers, families (with kids), and furry friends (pets).',
  guests: 4,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  prices: 80,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.7514231,
  lng: -74.00829,
  address: "32 Spring St",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10012",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: true,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: true,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
);

ny_listing7 = Listing.create!(
  host_id: claire.id,
  title: 'Nice studio in Midtown Manhattan',
  description: 'This apartment is a 1-minute walk from 3 major subway lines, and centrally-located between midtown and downtown - offering easy access to most of NYC’s tourist attractions. It is situated on the border between the young and stylish East Village/Lower East Side neighborhoods, and just steps from countless inexpensive restaurants, cafes, bars, galleries and shops. A memory-foam bed, Netflix, and recent-renovation provide comfort and complete the authentic New York experience!',
  guests: 3,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  prices: 119,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.7513637,
  lng: -73.986111,
  address: "22 W 38th St",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10018",
  air_conditioning: true,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: false,
  heating: true,
  iron: false,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
)

ny_listing8 = Listing.create!(
  host_id: james.id,
  title: 'Spacious Manhattan Apartment near Central Park',
  description: 'The apartment is located just a few steps from Central Park in a charming neighborhood filled with wonderful cafes, bars and restaurants. The flat sits on a very quiet, tree-lined street that\'s dotted with prewar Beaux-Arts and landmark brownstone buildings.',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 103,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 40.723652,
  lng: -74.005056,
  address: "503 Broadway",
  city: "New York",
  state: "New York",
  country: "USA",
  zip_code: "10012",
  air_conditioning: true,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: false
);

ny_listing1.photos.attach(io: ny1_1, filename: 'ny1_1.jpg');
ny_listing1.photos.attach(io: ny1_2, filename: 'ny1_2.jpg');
ny_listing1.photos.attach(io: ny1_3, filename: 'ny1_3.jpg');
ny_listing1.photos.attach(io: ny1_4, filename: 'ny1_4.jpg');
ny_listing1.photos.attach(io: ny1_5, filename: 'ny1_5.jpg');

ny_listing2.photos.attach(io: ny2_1, filename: 'ny2_1.jpg');
ny_listing2.photos.attach(io: ny2_2, filename: 'ny2_2.jpg');
ny_listing2.photos.attach(io: ny2_3, filename: 'ny2_3.jpg');
ny_listing2.photos.attach(io: ny2_4, filename: 'ny2_4.jpg');
ny_listing2.photos.attach(io: ny2_5, filename: 'ny2_5.jpg');

ny_listing3.photos.attach(io: ny3_1, filename: 'ny3_1.jpg');
ny_listing3.photos.attach(io: ny3_2, filename: 'ny3_2.jpg');
ny_listing3.photos.attach(io: ny3_3, filename: 'ny3_3.jpg');
ny_listing3.photos.attach(io: ny3_4, filename: 'ny3_4.jpg');
ny_listing3.photos.attach(io: ny3_5, filename: 'ny3_5.jpg');

ny_listing4.photos.attach(io: ny4_1, filename: 'ny4_1.jpg');
ny_listing4.photos.attach(io: ny4_2, filename: 'ny4_2.jpg');
ny_listing4.photos.attach(io: ny4_3, filename: 'ny4_3.jpg');
ny_listing4.photos.attach(io: ny4_4, filename: 'ny4_4.jpg');
ny_listing4.photos.attach(io: ny4_5, filename: 'ny4_5.jpg');

ny_listing5.photos.attach(io: ny5_1, filename: 'ny5_1.jpg');
ny_listing5.photos.attach(io: ny5_2, filename: 'ny5_2.jpg');
ny_listing5.photos.attach(io: ny5_3, filename: 'ny5_3.jpg');
ny_listing5.photos.attach(io: ny5_4, filename: 'ny5_4.jpg');
ny_listing5.photos.attach(io: ny5_5, filename: 'ny5_5.jpg');

ny_listing6.photos.attach(io: ny6_1, filename: 'ny6_1.jpg');
ny_listing6.photos.attach(io: ny6_2, filename: 'ny6_2.jpg');
ny_listing6.photos.attach(io: ny6_3, filename: 'ny6_3.jpg');
ny_listing6.photos.attach(io: ny6_4, filename: 'ny6_4.jpg');
ny_listing6.photos.attach(io: ny6_5, filename: 'ny6_5.jpg');

ny_listing7.photos.attach(io: ny7_1, filename: 'ny7_1.jpg');
ny_listing7.photos.attach(io: ny7_2, filename: 'ny7_2.jpg');
ny_listing7.photos.attach(io: ny7_3, filename: 'ny7_3.jpg');
ny_listing7.photos.attach(io: ny7_4, filename: 'ny7_4.jpg');
ny_listing7.photos.attach(io: ny7_5, filename: 'ny7_5.jpg');

ny_listing8.photos.attach(io: ny8_1, filename: 'ny8_1.jpg');
ny_listing8.photos.attach(io: ny8_2, filename: 'ny8_2.jpg');
ny_listing8.photos.attach(io: ny8_3, filename: 'ny8_3.jpg');
ny_listing8.photos.attach(io: ny8_4, filename: 'ny8_4.jpg');
ny_listing8.photos.attach(io: ny8_5, filename: 'ny8_5.jpg');

ny_booking1 = Booking.create!(listing_id: ny_listing1.id, guest_id: demo.id, start_date: 20181212, end_date: 20181215, num_guests: 2);
ny_booking2 = Booking.create!(listing_id: ny_listing1.id, guest_id: claire.id, start_date: 20181223, end_date: 20181226, num_guests: 1);
ny_booking3 = Booking.create!(listing_id: ny_listing1.id, guest_id: grace.id, start_date: 20181212, end_date: 20181215, num_guests: 2);

ny_booking4 = Booking.create!(listing_id: ny_listing2.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
ny_booking5 = Booking.create!(listing_id: ny_listing2.id, guest_id: kevin.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
ny_booking6 = Booking.create!(listing_id: ny_listing2.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 2);

ny_booking7 = Booking.create!(listing_id: ny_listing3.id, guest_id: kevin.id, start_date: 20181205, end_date: 20181208, num_guests: 2);
ny_booking8 = Booking.create!(listing_id: ny_listing3.id, guest_id: demo.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
ny_booking9 = Booking.create!(listing_id: ny_listing3.id, guest_id: klay.id, start_date: 20181213, end_date: 20181218, num_guests: 1);

ny_booking10 = Booking.create!(listing_id: ny_listing4.id, guest_id: klay.id, start_date: 20181220, end_date: 20181221, num_guests: 1);
ny_booking11 = Booking.create!(listing_id: ny_listing4.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
ny_booking12 = Booking.create!(listing_id: ny_listing4.id, guest_id: grace.id, start_date: 20181226, end_date: 20181227, num_guests: 2);

ny_booking13 = Booking.create!(listing_id: ny_listing5.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
ny_booking14 = Booking.create!(listing_id: ny_listing5.id, guest_id: demo.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
ny_booking15 = Booking.create!(listing_id: ny_listing5.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);

ny_booking16 = Booking.create!(listing_id: ny_listing6.id, guest_id: andre.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
ny_booking17 = Booking.create!(listing_id: ny_listing6.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 1);
ny_booking18 = Booking.create!(listing_id: ny_listing6.id, guest_id: demo.id, start_date: 20181213, end_date: 20181218, num_guests: 2);

ny_booking19 = Booking.create!(listing_id: ny_listing7.id, guest_id: claire.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
ny_booking20 = Booking.create!(listing_id: ny_listing7.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
ny_booking21 = Booking.create!(listing_id: ny_listing7.id, guest_id: kyle.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

ny_booking22 = Booking.create!(listing_id: ny_listing8.id, guest_id: kyle.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
ny_booking23 = Booking.create!(listing_id: ny_listing8.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
ny_booking24 = Booking.create!(listing_id: ny_listing8.id, guest_id: james.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

ny_review1 = Review.create!(
  reviewer_id: ny_booking1.guest_id, listing_id: ny_booking1.listing_id, booking_id: ny_booking1.id,
  body: 'A small, cozy space with a nice fireplace, easy check-in, and close enough to food shopping, walking etc. Would definitely recommend!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5,
);

ny_review2 = Review.create!(
  reviewer_id: ny_booking2.guest_id, listing_id: ny_booking1.listing_id, booking_id: ny_booking2.id,
  body: 'Our stay was short but sweet. Very cool quirky spot. Location was nice and convenient. Loved being in the heart of Williamsburg!',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

ny_review3 = Review.create!(
  reviewer_id: ny_booking3.guest_id, listing_id: ny_booking1.listing_id, booking_id: ny_booking3.id,
  body: 'We had a very nice time. Great location if you want to explore the Brooklyn/Williamsburg area. The rooftop was perfect for a drink after all the sightseeing. Thank you!',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

ny_review4 = Review.create!(
  reviewer_id: ny_booking4.guest_id, listing_id: ny_booking2.listing_id, booking_id: ny_booking4.id,
  body: 'Don’t judge a book by its cover—when you first get to the address it looks like it’s on a tough road—but nice and clean inside. Double pane windows make it quiet from busy road. Can very easily walk to 3 separate subway lines. SoHo can all be walked. Good pressure on the showers and the hosts are very responsive.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

ny_review5 = Review.create!(
  reviewer_id: ny_booking5.guest_id, listing_id: ny_booking2.listing_id, booking_id: ny_booking5.id,
  body: 'This apartment surpassed our high expectations... it was very clean, roomy, comfortable with modern conveniences. Nice kitchen with high quality appliances. Convenient location with easy access to Soho, Chinatown, and Tribeca. Subway station was very close so midtown was a short, inexpensive hop. The host provided great, timely communications and couldn\'t have been more accommodating. Overall, it was a great stay.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

ny_review6 = Review.create!(
  reviewer_id: ny_booking6.guest_id, listing_id: ny_booking2.listing_id, booking_id: ny_booking6.id,
  body: 'Beautiful place and clean. Everything is in walking distance and close to public transportation. Host is very responsive and friendly! Will book this Heirbnb again for my next NYC trip!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

ny_review7 = Review.create!(
  reviewer_id: ny_booking7.guest_id, listing_id: ny_booking3.listing_id, booking_id: ny_booking7.id,
  body: 'Beautiful place! A little farther out of the way than we expected. Communication and check in was very easy and we were so happy to find easy street parking very close to the place!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

ny_review8 = Review.create!(
  reviewer_id: ny_booking8.guest_id, listing_id: ny_booking3.listing_id, booking_id: ny_booking8.id,
  body: 'Claire was hospitable and very easy to work with. She responded quickly to inquiries and the space was nice and clean. We would definately stay there again!',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

ny_review9 = Review.create!(
  reviewer_id: ny_booking9.guest_id, listing_id: ny_booking3.listing_id, booking_id: ny_booking9.id,
  body: 'Absolutely loved Claire\'s place! Great location, not too far from the city, but far enough to be able to escape and relax. Not only is her place beautifully designed, it also had everything I could have wanted/needed. From a local guide book, delicious coffee, an amazing bed, and many more. Would definitely recommend. Thanks again!',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

ny_review10 = Review.create!(
  reviewer_id: ny_booking10.guest_id, listing_id: ny_booking4.listing_id, booking_id: ny_booking10.id,
  body: 'Quiet, comfortable, a perfect refuge for travel in the city.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

ny_review11 = Review.create!(
  reviewer_id: ny_booking11.guest_id, listing_id: ny_booking4.listing_id, booking_id: ny_booking11.id,
  body: 'This is a quiet little place in an avant-garde area of New York, the alphabet city. Comfortable dwelling surrounded by great books and near many interesting people and places!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

ny_review12 = Review.create!(
  reviewer_id: ny_booking12.guest_id, listing_id: ny_booking4.listing_id, booking_id: ny_booking12.id,
  body: 'A wonderful space! Books line the walls in this truly lovely apartment. Checking in was very easy and she was extremely accommodating. I stay at a lot of Heirbnbs and this was one of the nicest. She clearly cares about the space and the people who stay there.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

ny_review13 = Review.create!(
  reviewer_id: ny_booking13.guest_id, listing_id: ny_booking5.listing_id, booking_id: ny_booking13.id,
  body: 'The location is absolutely central and nearby to every place. The host was extremely helpful and polite. We had an absolutely wonderful time and would love to stay here again!',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

ny_review14 = Review.create!(
  reviewer_id: ny_booking14.guest_id, listing_id: ny_booking5.listing_id, booking_id: ny_booking14.id,
  body: 'Un bel appartement, idéalement placé. On ne peut pas faire plus près de Times Square. La vue est superbe. L\'appartement est agréable et confortable. Rohan nous a mis à l\'aise tout de suite pour faire comme chez nous. C\'est un hôte discret, amical et disponible pour vous aider en cas de besoin. Nous avons passé un très bon séjour.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

ny_review15 = Review.create!(
  reviewer_id: ny_booking15.guest_id, listing_id: ny_booking5.listing_id, booking_id: ny_booking15.id,
  body: 'The apartment was super clean and the location was outstanding. Very close to time square, restaurants, Broadway shows, metro and Central Park. We would definitely come back.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

ny_review16 = Review.create!(
  reviewer_id: ny_booking16.guest_id, listing_id: ny_booking6.listing_id, booking_id: ny_booking16.id,
  body: 'Stephen\'s place is very good. Spacious, clean, nicely decorated, the beds were great with good quality linen. Good sofa and large TV. The location is great (try the lunch box shop at the end of the alley). Aircon worked perfectly (I like a cool temperature to sleep). I\'d stay here again.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

ny_review17 = Review.create!(
  reviewer_id: ny_booking17.guest_id, listing_id: ny_booking6.listing_id, booking_id: ny_booking17.id,
  body: 'Stephen\'s place was exactly as described. The space was very well decorated and thoughtfully designed, we couldn’t ask for more. We really enjoyed the restful atmosphere and the spaciousness of the room. Very well worth the price.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

ny_review18 = Review.create!(
  reviewer_id: ny_booking18.guest_id, listing_id: ny_booking6.listing_id, booking_id: ny_booking18.id,
  body: 'Very nice place in a good location. Central and close to a lot of good food and shopping!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

ny_review19 = Review.create!(
  reviewer_id: ny_booking19.guest_id, listing_id: ny_booking7.listing_id, booking_id: ny_booking19.id,
  body: 'Affordable place and excellent location! Many restaurants, bars, and grocery stores in surrounding area. Walking distance from most of the major attractions. Check-in was easy, and communication with Claire was prompt. Overall, a great stay. The space doesn\'t have a lot of natural light, so just something to be aware of!',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

ny_review20 = Review.create!(
  reviewer_id: ny_booking20.guest_id, listing_id: ny_booking7.listing_id, booking_id: ny_booking20.id,
  body: 'Great host and a perfect location for me. A very clean apartment, too. I\'ve definitely bookmarked his place for repeat business trips.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

ny_review21 = Review.create!(
  reviewer_id: ny_booking21.guest_id, listing_id: ny_booking7.listing_id, booking_id: ny_booking21.id,
  body: 'Claire is a great host who communicates well and was nothing but pleasant throughout our experience. The space is private, clean and everything you need to make it through your stay!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

ny_review22 = Review.create!(
  reviewer_id: ny_booking22.guest_id, listing_id: ny_booking8.listing_id, booking_id: ny_booking22.id,
  body: 'James\' place was the ideal location for our stay in the city. Just far enough to be away from traffic but close enough for a quick ride or a long walk in. And across from Central Park! All amenities are within a couple blocks: grocery, pharmacy, local diner, cafe, and more. We enjoyed the layout of the flat and the personality of such a cozy welcoming space. James was generous with recommendations and quick replies. If we ever visit again, we will definitely stay in this wonderful space.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

ny_review23 = Review.create!(
  reviewer_id: ny_booking23.guest_id, listing_id: ny_booking8.listing_id, booking_id: ny_booking23.id,
  body: 'James is extremely nice and helpful. The place was perfect and cozy and the location was awesome. Thanks so much James!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

ny_review24 = Review.create!(
  reviewer_id: ny_booking24.guest_id, listing_id: ny_booking8.listing_id, booking_id: ny_booking24.id,
  body: 'This was our first time using Heirbnb but it certainly won\'t be our last. James was a great host - reachable and friendly and helpful. The apartment is a terrific space in an awesome neighborhood.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);


# CHI
chicago_listing1 = Listing.create!(
  host_id: demo.id,
  title: 'Wake up to Skyscraper Views at a Bespoke Central Studio',
  description: 'Take in impressive views of landmarks and skyscrapers while sitting out on the private, spacious balcony at this cozy urban oasis. Shoot some hoops on the basketball court, go for a swim in the complex\'s pool, or relax in the private sauna.',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 89,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.878880,
  lng: -87.638103,
  address: "233 S Wacker Dr",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60606",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: true,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

chicago_listing2 = Listing.create!(
  host_id: kyle.id,
  title: 'Sophisticated Flat in Historic Building',
  description: 'Sip a morning coffee in the sun drenched, open-plan kitchen of this contemporary apartment. This refurbished retreat is situated in a Civil War-era building and accented with chic decor, elegant furnishings, soaring ceilings, and arched windows.',
  guests: 4,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 105,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.882653,
  lng: -87.621593,
  address: "201 E Randolph St",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60602",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

chicago_listing3 = Listing.create!(
  host_id: claire.id,
  title: 'Light Filled Loft Apartment near Downtown Chicago',
  description: 'Relax and feel transported to another era in this sleekly updated century-old Chicago building. With abundant natural light, eclectic decor, and colorful details, it\'s a welcoming and convenient place to return to after a long day of work or fun.',
  guests: 4,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 69,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.879257,
  lng: -87.656416,
  address: "337 E Randolph St",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60601",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

chicago_listing4 = Listing.create!(
  host_id: kyle.id,
  title: 'Modern Apartment in Historic Greystone Home',
  description: 'Wake up rejuvenated in the serenity of this garden apartment set in an iconic Chicago greystone house. Experience a countryside getaway in the heart of the city, featuring a kitchen breakfast bar, a private entrance, and a front patio.',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 239,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.852461,
  lng: -87.640974,
  address: "2200 S Archer Ave",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60616",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

chicago_listing5 = Listing.create!(
  host_id: klay.id,
  title: 'Modern Logan Square Apartment near Public Transit',
  description: 'Stroll along the Bloomingdale Trail minutes away from this renovated and designer space featuring an open-concept kitchen with snack bar, plush furnishings, and a blend of contemporary and mid-century modern decor. Enjoy privacy and a central locale.',
  guests: 5,
  bedrooms: 2,
  beds: 2,
  baths: 1,
  prices: 100,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.921336,
  lng: -87.711612,
  address: "2047 N Milwaukee Ave",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60647",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: true
);

chicago_listing6 = Listing.create!(
  host_id: claire.id,
  title: 'Visit Restaurants from a Renovated Townhouse in Logan Square',
  description: 'Begin the day under the rain shower in a spa-like bathroom with luxurious toiletries. End the day here, too, soaking in the tub with a scented candle. In between, cook in a full kitchen, lounge in a sunny bay window, or catch up on work in the study.',
  guests: 4,
  bedrooms: 3,
  beds: 4,
  baths: 1,
  prices: 116,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.871435,
  lng: -87.626929,
  address: "433 W Harrison St",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60607",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

chicago_listing7 = Listing.create!(
  host_id: kyle.id,
  title: 'Eclectic and Colorful Retro Apartment near Logan Square',
  description: 'Make yourself at home in this warm, inviting space! Fun vintage furnishings, bright living areas with ceiling-height windows and colorful decor throughout. Brew coffee to enjoy at the kitchen breakfast table, before you begin your Chicago adventures.',
  guests: 6,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  prices: 88,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.870976,
  lng: -87.629535,
  address: "801 S Plymouth Ct",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60605",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
)

chicago_listing8 = Listing.create!(
  host_id: klay.id,
  title: 'Lounge in a Luxury Loft near Wrigley Field',
  description: 'Sip coffee at the granite-topped breakfast bar or unwind on the balcony of this open-concept, vibrant apartment. Red brick walls, cherry wood doors, and a shimmering stone-tile coffee table add vintage charm to this industrial-style space.',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  prices: 60,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 41.881282,
  lng: -87.632164,
  address: "20 S State St",
  city: "Chicago",
  state: "Illinois",
  country: "USA",
  zip_code: "60603",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

chicago_listing1.photos.attach(io: chicago1_1, filename: 'chicago1_1.jpg');
chicago_listing1.photos.attach(io: chicago1_2, filename: 'chicago1_2.jpg');
chicago_listing1.photos.attach(io: chicago1_3, filename: 'chicago1_3.jpg');
chicago_listing1.photos.attach(io: chicago1_4, filename: 'chicago1_4.jpg');
chicago_listing1.photos.attach(io: chicago1_5, filename: 'chicago1_5.jpg');

chicago_listing2.photos.attach(io: chicago2_1, filename: 'chicago2_1.jpg');
chicago_listing2.photos.attach(io: chicago2_2, filename: 'chicago2_2.jpg');
chicago_listing2.photos.attach(io: chicago2_3, filename: 'chicago2_3.jpg');
chicago_listing2.photos.attach(io: chicago2_4, filename: 'chicago2_4.jpg');
chicago_listing2.photos.attach(io: chicago2_5, filename: 'chicago2_5.jpg');

chicago_listing3.photos.attach(io: chicago3_1, filename: 'chicago3_1.jpg');
chicago_listing3.photos.attach(io: chicago3_2, filename: 'chicago3_2.jpg');
chicago_listing3.photos.attach(io: chicago3_3, filename: 'chicago3_3.jpg');
chicago_listing3.photos.attach(io: chicago3_4, filename: 'chicago3_4.jpg');
chicago_listing3.photos.attach(io: chicago3_5, filename: 'chicago3_5.jpg');

chicago_listing4.photos.attach(io: chicago4_1, filename: 'chicago4_1.jpg');
chicago_listing4.photos.attach(io: chicago4_2, filename: 'chicago4_2.jpg');
chicago_listing4.photos.attach(io: chicago4_3, filename: 'chicago4_3.jpg');
chicago_listing4.photos.attach(io: chicago4_4, filename: 'chicago4_4.jpg');
chicago_listing4.photos.attach(io: chicago4_5, filename: 'chicago4_5.jpg');

chicago_listing5.photos.attach(io: chicago5_1, filename: 'chicago5_1.jpg');
chicago_listing5.photos.attach(io: chicago5_2, filename: 'chicago5_2.jpg');
chicago_listing5.photos.attach(io: chicago5_3, filename: 'chicago5_3.jpg');
chicago_listing5.photos.attach(io: chicago5_4, filename: 'chicago5_4.jpg');
chicago_listing5.photos.attach(io: chicago5_5, filename: 'chicago5_5.jpg');

chicago_listing6.photos.attach(io: chicago6_1, filename: 'chicago6_1.jpg');
chicago_listing6.photos.attach(io: chicago6_2, filename: 'chicago6_2.jpg');
chicago_listing6.photos.attach(io: chicago6_3, filename: 'chicago6_3.jpg');
chicago_listing6.photos.attach(io: chicago6_4, filename: 'chicago6_4.jpg');
chicago_listing6.photos.attach(io: chicago6_5, filename: 'chicago6_5.jpg');

chicago_listing7.photos.attach(io: chicago7_1, filename: 'chicago7_1.jpg');
chicago_listing7.photos.attach(io: chicago7_2, filename: 'chicago7_2.jpg');
chicago_listing7.photos.attach(io: chicago7_3, filename: 'chicago7_3.jpg');
chicago_listing7.photos.attach(io: chicago7_4, filename: 'chicago7_4.jpg');
chicago_listing7.photos.attach(io: chicago7_5, filename: 'chicago7_5.jpg');

chicago_listing8.photos.attach(io: chicago8_1, filename: 'chicago8_1.jpg');
chicago_listing8.photos.attach(io: chicago8_2, filename: 'chicago8_2.jpg');
chicago_listing8.photos.attach(io: chicago8_3, filename: 'chicago8_3.jpg');
chicago_listing8.photos.attach(io: chicago8_4, filename: 'chicago8_4.jpg');
chicago_listing8.photos.attach(io: chicago8_5, filename: 'chicago8_5.jpg');

chicago_booking1 = Booking.create!(listing_id: chicago_listing1.id, guest_id: kevin.id, start_date: 20181212, end_date: 20181215, num_guests: 2);
chicago_booking2 = Booking.create!(listing_id: chicago_listing1.id, guest_id: grace.id, start_date: 20181223, end_date: 20181226, num_guests: 1);
chicago_booking3 = Booking.create!(listing_id: chicago_listing1.id, guest_id: stephen.id, start_date: 20181212, end_date: 20181215, num_guests: 2);

chicago_booking4 = Booking.create!(listing_id: chicago_listing2.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
chicago_booking5 = Booking.create!(listing_id: chicago_listing2.id, guest_id: klay.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
chicago_booking6 = Booking.create!(listing_id: chicago_listing2.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 2);

chicago_booking7 = Booking.create!(listing_id: chicago_listing3.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);
chicago_booking8 = Booking.create!(listing_id: chicago_listing3.id, guest_id: andre.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
chicago_booking9 = Booking.create!(listing_id: chicago_listing3.id, guest_id: demo.id, start_date: 20181213, end_date: 20181218, num_guests: 1);

chicago_booking10 = Booking.create!(listing_id: chicago_listing4.id, guest_id: kevin.id, start_date: 20181220, end_date: 20181221, num_guests: 1);
chicago_booking11 = Booking.create!(listing_id: chicago_listing4.id, guest_id: claire.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
chicago_booking12 = Booking.create!(listing_id: chicago_listing4.id, guest_id: grace.id, start_date: 20181226, end_date: 20181227, num_guests: 2);

chicago_booking13 = Booking.create!(listing_id: chicago_listing5.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
chicago_booking14 = Booking.create!(listing_id: chicago_listing5.id, guest_id: grace.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
chicago_booking15 = Booking.create!(listing_id: chicago_listing5.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);

chicago_booking16 = Booking.create!(listing_id: chicago_listing6.id, guest_id: grace.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
chicago_booking17 = Booking.create!(listing_id: chicago_listing6.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 1);
chicago_booking18 = Booking.create!(listing_id: chicago_listing6.id, guest_id: demo.id, start_date: 20181213, end_date: 20181218, num_guests: 2);

chicago_booking19 = Booking.create!(listing_id: chicago_listing7.id, guest_id: claire.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
chicago_booking20 = Booking.create!(listing_id: chicago_listing7.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
chicago_booking21 = Booking.create!(listing_id: chicago_listing7.id, guest_id: james.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

chicago_booking22 = Booking.create!(listing_id: chicago_listing8.id, guest_id: kyle.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
chicago_booking23 = Booking.create!(listing_id: chicago_listing8.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
chicago_booking24 = Booking.create!(listing_id: chicago_listing8.id, guest_id: andre.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

chicago_review1 = Review.create!(
  reviewer_id: chicago_booking1.guest_id, listing_id: chicago_booking1.listing_id, booking_id: chicago_booking1.id,
  body: 'This is a great apartment in a fantastic location. It\'s easy to get to, and it was a very restful oasis in the city for us. We would stay here again in a heartbeat!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

chicago_review2 = Review.create!(
  reviewer_id: chicago_booking2.guest_id, listing_id: chicago_booking1.listing_id, booking_id: chicago_booking2.id,
  body: 'This apartment was such a great find in the heart of downtown Chicago! It was an easily walkable distance (anywhere from 5 to 15 min) to many restaurants and to Millenium Park, etc. The grocery store is literally on the first floor of the building-- so convenient!! Plus Stephen was an exceptionally considerate, responsive host. I highly recommend staying here.',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

chicago_review3 = Review.create!(
  reviewer_id: chicago_booking3.guest_id, listing_id: chicago_booking1.listing_id, booking_id: chicago_booking3.id,
  body: 'The studio was very spacious and clean. Modern finishes and styling. It felt like a hotel room but much larger. There was access to a balcony with a view of some nearby skyscrapers. Demo was also very communicative and proactively provided check-in instructions ahead of my arrival. There is a front desk person in the lobby at all times. Location was fantastic. Walkable distance to many restaurants and the Navy Pier. There’s also a grocery store right next to the apartment. Overall, I was very pleased with my experience.',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

chicago_review4 = Review.create!(
  reviewer_id: chicago_booking4.guest_id, listing_id: chicago_booking2.listing_id, booking_id: chicago_booking4.id,
  body: 'We very much enjoyed our short stay. Great location - wonderful amenities - very comfortable bed. We couldn’t have asked for better!',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

chicago_review5 = Review.create!(
  reviewer_id: chicago_booking5.guest_id, listing_id: chicago_booking2.listing_id, booking_id: chicago_booking5.id,
  body: 'We loved this place. Bright, clean, thoughtful extra touches, comfortable bed, great neighborhood, and location. Would love to return. Lovely historic neighborhood just a quick walk to the brown line, zoo, history museum, and more. Great kitchen... great all around!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

chicago_review6 = Review.create!(
  reviewer_id: chicago_booking6.guest_id, listing_id: chicago_booking2.listing_id, booking_id: chicago_booking6.id,
  body: 'Beautiful place. Would love to visit again.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

chicago_review7 = Review.create!(
  reviewer_id: chicago_booking7.guest_id, listing_id: chicago_booking3.listing_id, booking_id: chicago_booking7.id,
  body: 'I am an Heirbnb Super Host - Claire raises the bar for us all! Great job!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

chicago_review8 = Review.create!(
  reviewer_id: chicago_booking8.guest_id, listing_id: chicago_booking3.listing_id, booking_id: chicago_booking8.id,
  body: 'Claire is an exceptional communicator with an exceptional space. The apartment is awesome and has everything you need in a terrific location.',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

chicago_review9 = Review.create!(
  reviewer_id: chicago_booking9.guest_id, listing_id: chicago_booking3.listing_id, booking_id: chicago_booking9.id,
  body: 'Wonderful place. We really enjoyed ourselves and relaxed at Claire\'s loft. Very clean. Love the mixture of cultures which we don\'t get much of back home. Location was great. Very quick walk to get to Wicker Park and many great local restaurants as well. Felt very safe in the neighborhood and at Claire\'s place. Claire is fantastic at returning messages. Always a quick reply and we had no problems at all that couldn\'t be fixed quickly. Highly recommend Claire\'s loft!',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

chicago_review10 = Review.create!(
  reviewer_id: chicago_booking10.guest_id, listing_id: chicago_booking4.listing_id, booking_id: chicago_booking10.id,
  body: 'Kyle\'s place was wonderful and spotless. He provided everything we needed to have a great stay and I\'ve already recommended his place to friends. If you\'re looking for something in this area and his flat is available - book it, you won\'t be disappointed.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

chicago_review11 = Review.create!(
  reviewer_id: chicago_booking11.guest_id, listing_id: chicago_booking4.listing_id, booking_id: chicago_booking11.id,
  body: 'Kyle\’s place was super cute, clean and close! Close to local train and in a great neighborhood. It was clean and had great amenities/ local recommendations etc. fireplace was a lovely touch as it was very cold when we were there. Thanks for a great stay!!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

chicago_review12 = Review.create!(
  reviewer_id: chicago_booking12.guest_id, listing_id: chicago_booking4.listing_id, booking_id: chicago_booking12.id,
  body: 'Kyle\'s place has everything you need to make your stay comfortable. It is exactly as pictured.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

chicago_review13 = Review.create!(
  reviewer_id: chicago_booking13.guest_id, listing_id: chicago_booking5.listing_id, booking_id: chicago_booking13.id,
  body: 'This apartment was very well-appointed, clean, stylish, and had every amenity we needed. We spent a great deal of time exploring the city, but it was so nice to return to this apartment with its comfortable furniture and beds.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

chicago_review14 = Review.create!(
  reviewer_id: chicago_booking14.guest_id, listing_id: chicago_booking5.listing_id, booking_id: chicago_booking14.id,
  body: 'Staying in the Chicago area? Walking distance to the fun in Logan Square, a quick uber to anywhere else.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

chicago_review15 = Review.create!(
  reviewer_id: chicago_booking15.guest_id, listing_id: chicago_booking5.listing_id, booking_id: chicago_booking15.id,
  body: 'Klay was a great host who was available all the time. The place is not only comfortable, but cozy, well decorated and sparkling clean! He even pampered us with some delicious snacks.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

chicago_review16 = Review.create!(
  reviewer_id: chicago_booking16.guest_id, listing_id: chicago_booking6.listing_id, booking_id: chicago_booking16.id,
  body: 'Claire really go above and beyond of what\'s expected. The place was spotless and you can really tell how much time and thought she put into her place. As someone who is in the hospitality industry, I really appreciate things like that. I definitely would recommend this place to anyone traveling to Chicago.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

chicago_review17 = Review.create!(
  reviewer_id: chicago_booking17.guest_id, listing_id: chicago_booking6.listing_id, booking_id: chicago_booking17.id,
  body: 'Greatest host ever! Claire managed the place so well and accommodated us with great snacks and beverages!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

chicago_review18 = Review.create!(
  reviewer_id: chicago_booking18.guest_id, listing_id: chicago_booking6.listing_id, booking_id: chicago_booking18.id,
  body: 'I\'m sure you\'ll enjoy your stay... exceptionally clean & very modern. We had several questions and Claire responded immediately. Street was permit parking but "permit slips" were provided and had no trouble finding a space in front ...',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

chicago_review19 = Review.create!(
  reviewer_id: chicago_booking19.guest_id, listing_id: chicago_booking7.listing_id, booking_id: chicago_booking19.id,
  body: 'This apartment had so much personality. Loved the artwork and homey feel.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

chicago_review20 = Review.create!(
  reviewer_id: chicago_booking20.guest_id, listing_id: chicago_booking7.listing_id, booking_id: chicago_booking20.id,
  body: 'What an awesome place! Unforgettable in terms of the "little touches" and character. Everything from the decor to the comfort to the cleanliness to the amount of towels available. Market and dining are right around the corner. Highly recommended!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

chicago_review21 = Review.create!(
  reviewer_id: chicago_booking21.guest_id, listing_id: chicago_booking7.listing_id, booking_id: chicago_booking21.id,
  body: 'This is a wonderfully unique apartment with colorful works of art on all the walls. The beds were comfortable and the neighborhood was quiet during our stay. It was relatively easy to get to the touristy spots downtown via public transportation though it took about 45 minutes. All in all, we enjoyed our stay here and our daughter enjoyed playing with the toys and games provided by Kyle.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

chicago_review22 = Review.create!(
  reviewer_id: chicago_booking22.guest_id, listing_id: chicago_booking8.listing_id, booking_id: chicago_booking22.id,
  body: 'Very nicely appointed and comfortable loft in a great area. Plenty within walking distance and you quickly feel at home.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

chicago_review23 = Review.create!(
  reviewer_id: chicago_booking23.guest_id, listing_id: chicago_booking8.listing_id, booking_id: chicago_booking23.id,
  body: 'Pictures don\'t do this place justice! It was much larger than expected and loaded with charm. This was our first trip to Chicago. Staying here was the perfect place explore the city - close to lots of fun restaurants, parks and easy access to public transportation. When we\'re weren\'t out seeing the city, we enjoyed hanging out in the loft. Klay was great and very welcoming!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

chicago_review24 = Review.create!(
  reviewer_id: chicago_booking24.guest_id, listing_id: chicago_booking8.listing_id, booking_id: chicago_booking24.id,
  body: 'Great place! There are some paths for some really beautiful morning runs!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

# LA
la_listing1 = Listing.create!(
  host_id: demo.id,
  title: 'Bike Around Town from the Sweetest Cottage in Venice Beach',
  description: 'Have a backyard barbecue and eat at a shaded picnic table after exploring Abbot Kinney on bikes. Retreat indoors to a unique corner of paradise, decorated in eclectic beach chic. It’s a bright and airy cottage—a classic Craftsman with a modern twist.',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 119,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 33.979663,
  lng: -118.471973,
  address: "Venice Fishing Pier",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90292",
  air_conditioning: false,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: true
);

la_listing2 = Listing.create!(
  host_id: kyle.id,
  title: 'Walk to Venice Beach from a Bright, Artistic Loft',
  description: 'Live the LA dream from this colorful, sunlit loft. Featuring spaciously high ceilings, an electric skylight that invites the cool, ocean breeze, and a new Casper mattress for exceptional comfort. It\'s a great choice for beach lovers and short stays.',
  guests: 2,
  bedrooms: 5,
  beds: 6,
  baths: 3,
  prices: 109,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 33.980391,
  lng: -118.469634,
  address: "2819 Ocean Front Walk",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90291",
  air_conditioning: false,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: false,
  wifi: true,
  self_check_in: true
);

la_listing3 = Listing.create!(
  host_id: claire.id,
  title: 'Sweet Spot Garden Pool Studio Guesthouse Walk to West Third St',
  description: 'Unwind in the saltwater pool, or relax under the bougainvilleas on the beautiful patio of this bright and private guesthouse haven. Whip up a meal in the fully-equipped kitchenette or pour from the complimentary bottle of wine.',
  guests: 2,
  bedrooms: 2,
  beds: 1,
  baths: 1,
  prices: 139,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 34.0689294,
  lng: -118.3221697,
  address: "Windsor Square",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90020",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: false
);

la_listing4 = Listing.create!(
  host_id: kyle.id,
  title: 'Hollywood Hills Large Modern Room in New House',
  description: 'Free parking just across the street with views of the plush garden in this new, modern and super clean home. Very large, new and very private new designer suite with the most comfortable Tempur-Pedic foam mattress, mini refrigerator in room. Enjoy the modern in-room bathroom with desk and chair, flat screen smart tv with all cable channels. The large home is in the Hollywood Hills (next to Beverly Hills) so we do see many celebrities and paparazzi taking photos.',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  prices: 69,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 34.091644,
  lng: -118.3936697,
  address: "1164-1200 Doheny Drive",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90069",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: true,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

la_listing5 = Listing.create!(
  host_id: klay.id,
  title: 'Lofty Stay',
  description: 'Discover a hidden sanctuary with a balcony overlooking a lush inner garden. Unwind in this exquisite condo loft space featuring an open plan and pops of color amid stark whites. Guests have access to building amenities including a pool and gym.',
  guests: 2,
  bedrooms: 4,
  beds: 3,
  baths: 1,
  prices: 125,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 33.866937,
  lng: -118.367966,
  address: "1201 Westwood Blvd",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90024",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: true,
  kitchen: true,
  hair_dryer: true,
  heating: false,
  iron: true,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

la_listing6 = Listing.create!(
  host_id: bosco.id,
  title: 'Private Modern Guesthouse near Beverly Hills',
  description: 'Relax after a day of visiting the city sites in your own studio guesthouse designed specifically for the travelers needs. Inside you’ll find a fully equipped kitchenette and a comfortable queen size bed, for a great night sleep. Take a seat on the furnished patio around the fire pit and enjoy L.A.’s perfect weather.',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 107,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 34.052105,
  lng: -118.371567,
  address: "217 S Linden Dr",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90212",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

la_listing7 = Listing.create!(
  host_id: claire.id,
  title: 'Rock and Retro-Inspired Home in Silver Lake',
  description: 'Lounge under the pergola on the beautiful front porch, or in the colorful courtyard of this rock-and-roll half-duplex oozing Angeleno charm. Spin a record and dance while exploring all the fun furnishings and art in this centrally located suite.',
  guests: 3,
  bedrooms: 1,
  beds: 2,
  baths: 1,
  prices: 89,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 34.077255,
  lng: -118.272250,
  address: "2600 Kent St",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90026",
  air_conditioning: true,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
)

la_listing8 = Listing.create!(
  host_id: grace.id,
  title: 'Private Master Suite in Modern, Renovated Bungalow',
  description: 'In addition to three private bedrooms and huge en suite bathroom, enjoy the shared patio with barbecue and fire pit. Unwind on the back patio of this bright West Los Angeles home featuring an indoor fireplace and vaulted ceilings in the common room.',
  guests: 5,
  bedrooms: 3,
  beds: 3,
  baths: 1,
  prices: 75,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 33.775747,
  lng: -118.375937,
  address: "9876 Wilshire Blvd",
  city: "Los Angeles",
  state: "California",
  country: "USA",
  zip_code: "90210",
  air_conditioning: true,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: true,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

la_listing1.photos.attach(io: la1_1, filename: 'la1_1.jpg');
la_listing1.photos.attach(io: la1_2, filename: 'la1_2.jpg');
la_listing1.photos.attach(io: la1_3, filename: 'la1_3.jpg');
la_listing1.photos.attach(io: la1_4, filename: 'la1_4.jpg');
la_listing1.photos.attach(io: la1_5, filename: 'la1_5.jpg');

la_listing2.photos.attach(io: la2_1, filename: 'la2_1.jpg');
la_listing2.photos.attach(io: la2_2, filename: 'la2_2.jpg');
la_listing2.photos.attach(io: la2_3, filename: 'la2_3.jpg');
la_listing2.photos.attach(io: la2_4, filename: 'la2_4.jpg');
la_listing2.photos.attach(io: la2_5, filename: 'la2_5.jpg');

la_listing3.photos.attach(io: la3_1, filename: 'la3_1.jpg');
la_listing3.photos.attach(io: la3_2, filename: 'la3_2.jpg');
la_listing3.photos.attach(io: la3_3, filename: 'la3_3.jpg');
la_listing3.photos.attach(io: la3_4, filename: 'la3_4.jpg');
la_listing3.photos.attach(io: la3_5, filename: 'la3_5.jpg');

la_listing4.photos.attach(io: la4_1, filename: 'la4_1.jpg');
la_listing4.photos.attach(io: la4_2, filename: 'la4_2.jpg');
la_listing4.photos.attach(io: la4_3, filename: 'la4_3.jpg');
la_listing4.photos.attach(io: la4_4, filename: 'la4_4.jpg');
la_listing4.photos.attach(io: la4_5, filename: 'la4_5.jpg');

la_listing5.photos.attach(io: la5_1, filename: 'la5_1.jpg');
la_listing5.photos.attach(io: la5_2, filename: 'la5_2.jpg');
la_listing5.photos.attach(io: la5_3, filename: 'la5_3.jpg');
la_listing5.photos.attach(io: la5_4, filename: 'la5_4.jpg');
la_listing5.photos.attach(io: la5_5, filename: 'la5_5.jpg');

la_listing6.photos.attach(io: la6_1, filename: 'la6_1.jpg');
la_listing6.photos.attach(io: la6_2, filename: 'la6_2.jpg');
la_listing6.photos.attach(io: la6_3, filename: 'la6_3.jpg');
la_listing6.photos.attach(io: la6_4, filename: 'la6_4.jpg');
la_listing6.photos.attach(io: la6_5, filename: 'la6_5.jpg');

la_listing7.photos.attach(io: la7_1, filename: 'la7_1.jpg');
la_listing7.photos.attach(io: la7_2, filename: 'la7_2.jpg');
la_listing7.photos.attach(io: la7_3, filename: 'la7_3.jpg');
la_listing7.photos.attach(io: la7_4, filename: 'la7_4.jpg');
la_listing7.photos.attach(io: la7_5, filename: 'la7_5.jpg');

la_listing8.photos.attach(io: la8_1, filename: 'la8_1.jpg');
la_listing8.photos.attach(io: la8_2, filename: 'la8_2.jpg');
la_listing8.photos.attach(io: la8_3, filename: 'la8_3.jpg');
la_listing8.photos.attach(io: la8_4, filename: 'la8_4.jpg');
la_listing8.photos.attach(io: la8_5, filename: 'la8_5.jpg');

la_booking1 = Booking.create!(listing_id: la_listing1.id, guest_id: kevin.id, start_date: 20181212, end_date: 20181215, num_guests: 2);
la_booking2 = Booking.create!(listing_id: la_listing1.id, guest_id: bosco.id, start_date: 20181223, end_date: 20181226, num_guests: 1);
la_booking3 = Booking.create!(listing_id: la_listing1.id, guest_id: claire.id, start_date: 20181212, end_date: 20181215, num_guests: 2);

la_booking4 = Booking.create!(listing_id: la_listing2.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
la_booking5 = Booking.create!(listing_id: la_listing2.id, guest_id: stephen.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
la_booking6 = Booking.create!(listing_id: la_listing2.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 2);

la_booking7 = Booking.create!(listing_id: la_listing3.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);
la_booking8 = Booking.create!(listing_id: la_listing3.id, guest_id: bosco.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
la_booking9 = Booking.create!(listing_id: la_listing3.id, guest_id: grace.id, start_date: 20181213, end_date: 20181218, num_guests: 1);

la_booking10 = Booking.create!(listing_id: la_listing4.id, guest_id: claire.id, start_date: 20181220, end_date: 20181221, num_guests: 1);
la_booking11 = Booking.create!(listing_id: la_listing4.id, guest_id: kevin.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
la_booking12 = Booking.create!(listing_id: la_listing4.id, guest_id: grace.id, start_date: 20181226, end_date: 20181227, num_guests: 2);

la_booking13 = Booking.create!(listing_id: la_listing5.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
la_booking14 = Booking.create!(listing_id: la_listing5.id, guest_id: grace.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
la_booking15 = Booking.create!(listing_id: la_listing5.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);

la_booking16 = Booking.create!(listing_id: la_listing6.id, guest_id: demo.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
la_booking17 = Booking.create!(listing_id: la_listing6.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 1);
la_booking18 = Booking.create!(listing_id: la_listing6.id, guest_id: grace.id, start_date: 20181213, end_date: 20181218, num_guests: 2);

la_booking19 = Booking.create!(listing_id: la_listing7.id, guest_id: claire.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
la_booking20 = Booking.create!(listing_id: la_listing7.id, guest_id: bosco.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
la_booking21 = Booking.create!(listing_id: la_listing7.id, guest_id: grace.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

la_booking22 = Booking.create!(listing_id: la_listing8.id, guest_id: kyle.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
la_booking23 = Booking.create!(listing_id: la_listing8.id, guest_id: klay.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
la_booking24 = Booking.create!(listing_id: la_listing8.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

la_review1 = Review.create!(
  reviewer_id: la_booking1.guest_id, listing_id: la_booking1.listing_id, booking_id: la_booking1.id,
  body: 'Cute and stylish place in a great location!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

la_review2 = Review.create!(
  reviewer_id: la_booking2.guest_id, listing_id: la_booking1.listing_id, booking_id: la_booking2.id,
  body: 'Great little place on a nice quiet street close to everything. Very clean. Stephen is an awesome host!',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

la_review3 = Review.create!(
  reviewer_id: la_booking3.guest_id, listing_id: la_booking1.listing_id, booking_id: la_booking3.id,
  body: 'You will not be disappointed with this amazing cozy spot! I recommend to anyone staying in the Venice area!',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

la_review4 = Review.create!(
  reviewer_id: la_booking4.guest_id, listing_id: la_booking2.listing_id, booking_id: la_booking4.id,
  body: 'Highly recommend this location! Less than a 5 minute walk to Venice Beach! Overall a very comfy and homey feel :)',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

la_review5 = Review.create!(
  reviewer_id: la_booking5.guest_id, listing_id: la_booking2.listing_id, booking_id: la_booking5.id,
  body: 'Such a nice, cozy place. Loft makes it really cool and the place was decked with everything we needed: dishes, kitchen utensils, microwave, glasses, soap and shampoo dispenser, and also beach chairs and towels - those really helped with our beach trip only a short walk away!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

la_review6 = Review.create!(
  reviewer_id: la_booking6.guest_id, listing_id: la_booking2.listing_id, booking_id: la_booking6.id,
  body: 'Great spot. Amazing location. So much fun!!!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

la_review7 = Review.create!(
  reviewer_id: la_booking7.guest_id, listing_id: la_booking3.listing_id, booking_id: la_booking7.id,
  body: 'Staying at your guest house was a real treat. Claire goes above and beyond as a host. So many personal touches and such a beautiful spot. I felt like I was staying with family. I will definitely be back on my next visit to LA. THANK YOU for making it so easy and so pleasant.',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

la_review8 = Review.create!(
  reviewer_id: la_booking8.guest_id, listing_id: la_booking3.listing_id, booking_id: la_booking8.id,
  body: 'Claire is an amazing host. Her pool house is a sweet little oasis. The location is great. Perfect for walking and close to tons of amazing shops and restaurants.',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

la_review9 = Review.create!(
  reviewer_id: la_booking9.guest_id, listing_id: la_booking3.listing_id, booking_id: la_booking9.id,
  body: 'Claire was very welcoming and helpful! Overall a great location (walkable to restaurants and shops)!',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

la_review10 = Review.create!(
  reviewer_id: la_booking10.guest_id, listing_id: la_booking4.listing_id, booking_id: la_booking10.id,
  body: 'Kyle went above and beyond to make sure we had a pleasant stay. He is very accommodating. His place was lovely, our room was clean, and the view from his balcony was unreal. I will definitely consider staying with him again the next time we want to travel back to LA.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

la_review11 = Review.create!(
  reviewer_id: la_booking11.guest_id, listing_id: la_booking4.listing_id, booking_id: la_booking11.id,
  body: 'My friend and I came across Kyle\'s place and were lucky enough to spend about a week there. His place is brand new, very clean and gorgeous. He created a perfect modern space and complimented it with his kind, funny and open personality. And the view is INSANE. Wish we could have stayed longer!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

la_review12 = Review.create!(
  reviewer_id: la_booking12.guest_id, listing_id: la_booking4.listing_id, booking_id: la_booking12.id,
  body: 'The best Heirbnb stay I have had so far! The location, the room, the host...everything was beyond what I expected. Also the view from the house was breathtaking. I\'d definitely come back when I visit LA next time.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

la_review13 = Review.create!(
  reviewer_id: la_booking13.guest_id, listing_id: la_booking5.listing_id, booking_id: la_booking13.id,
  body: 'Klay\'s loft was amazing! Not only is it a gorgeous space to go relax in after a day of sightseeing, it has incredible amenities and is super close to everything.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

la_review14 = Review.create!(
  reviewer_id: la_booking14.guest_id, listing_id: la_booking5.listing_id, booking_id: la_booking14.id,
  body: 'Great location, clean and comfortable, and Klay is a very gracious host who provided us with great suggestions for great food just a short walk away.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

la_review15 = Review.create!(
  reviewer_id: la_booking15.guest_id, listing_id: la_booking5.listing_id, booking_id: la_booking15.id,
  body: 'Klay\'s place is great. Location is so close to everything and the travel time isn\'t far if you plan to stay in LA. I would 100% return back and stay over again!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

la_review16 = Review.create!(
  reviewer_id: la_booking16.guest_id, listing_id: la_booking6.listing_id, booking_id: la_booking16.id,
  body: 'he design features are perfect. Everything is compact and obviously Bosco put a lot of thought when designing the unit.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

la_review17 = Review.create!(
  reviewer_id: la_booking17.guest_id, listing_id: la_booking6.listing_id, booking_id: la_booking17.id,
  body: 'Amazing place to stay! Everything was beautifully decorated - the shower was amazing, and it was super clean! We had an incident that was completely our fault but Bosco came to the rescue pretty late at night and was super nice about it.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

la_review18 = Review.create!(
  reviewer_id: la_booking18.guest_id, listing_id: la_booking6.listing_id, booking_id: la_booking18.id,
  body: 'Fantastic spot from Bosco!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

la_review19 = Review.create!(
  reviewer_id: la_booking19.guest_id, listing_id: la_booking7.listing_id, booking_id: la_booking19.id,
  body: 'Excellent location. Adorable home with funky decor. Close to restaurants, coffee shops, and entertainment.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

la_review20 = Review.create!(
  reviewer_id: la_booking20.guest_id, listing_id: la_booking7.listing_id, booking_id: la_booking20.id,
  body: 'My boyfriend and I had an amazing stay here. The location could not be any better, the house is so cute, and you are provided with everything you need. Highly recommend!!!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

la_review21 = Review.create!(
  reviewer_id: la_booking21.guest_id, listing_id: la_booking7.listing_id, booking_id: la_booking21.id,
  body: 'Claire\'s place is as described on the site. Easy check-in and check-out. Everything is clean and in working order.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

la_review22 = Review.create!(
  reviewer_id: la_booking22.guest_id, listing_id: la_booking8.listing_id, booking_id: la_booking22.id,
  body: 'Grace was amazing in her communication, and I felt like she could read my mind. The space is beautiful and located in a great neighborhood',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

la_review23 = Review.create!(
  reviewer_id: la_booking23.guest_id, listing_id: la_booking8.listing_id, booking_id: la_booking23.id,
  body: 'Had a fantastic time! Grace was the perfect host - she was thorough, courteous, professional and helpful. Check-in was a breeze and we had a wonderful, quiet, relaxing stay. ',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

la_review24 = Review.create!(
  reviewer_id: la_booking24.guest_id, listing_id: la_booking8.listing_id, booking_id: la_booking24.id,
  body: 'This was my first time staying at an Heirbnb and it was a wonderful experience. No wonder the commercial hotel chains are sweating!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);


# SF
sf_listing1 = Listing.create!(
  host_id: demo.id,
  title: 'Contemporary Apartment in Potrero Hill',
  description: 'Enjoy stunning views of the city at this renovated hilltop hideaway in one of San Francisco\'s sunniest neighborhoods. Marvel at the view while washing dishes in the fully equipped kitchen or while kicking back with coffee on the sunny balcony.',
  guests: 3,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 190,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.784065,
  lng: -122.418643,
  address: "751 Ellis St",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94109",
  air_conditioning: false,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: false,
  patio: true,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing2 = Listing.create!(
  host_id: grace.id,
  title: 'Relax on the Deck of a Bold Victorian Townhouse',
  description: 'Stroll to the Painted Ladies from a colorful, remodeled 1885 Victorian home. Relax with a book on the shaded deck and kick back in the suite on its own private floor. Modern art, vibrant accent walls, and period features create an eclectic look.',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 138,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.796361,
  lng: -122.410794,
  address: "926-948 Pacific Ave",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94133",
  air_conditioning: false,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing3 = Listing.create!(
  host_id: claire.id,
  title: 'Retreat in a Roomy Apartment in Mission Dolores / Castro',
  description: 'Stay in the vibrant heart of SF in a chic apt favored by Heirbnb employees! Steps from Dolores Park, Michelin star restaurants, and hip bars, this exceptionally-designed oasis is a walker\'s and foodie\'s paradise, unmatched in comfort and style.',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  prices: 276,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.7596146,
  lng: -122.4277227,
  address: "601 Dolores St",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94110",
  air_conditioning: false,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing4 = Listing.create!(
  host_id: james.id,
  title: 'Room in Elegant, Private, Serene House with Beautiful Furnishings',
  description: 'Drink a morning coffee while luxuriating in your private bedroom suite set in an Art Deco home. This cozy oasis features a separate entrance, a remodeled en suite bathroom with luxurious amenities, and access to vibrant neighborhoods nearby.',
  guests: 2,
  bedrooms: 3,
  beds: 4,
  baths: 1,
  prices: 115,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.787251,
  lng: -122.448563,
  address: "10 South San Gabriel Rd",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94411",
  air_conditioning: false,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing5 = Listing.create!(
  host_id: klay.id,
  title: 'Recharge in Lush Gardens in the Heart of Bernal Heights',
  description: 'While away summer evenings on the terrace of this historic Victorian home on a quiet street. Stroll to the top of Bernal Heights for splendid views of the city, sink into the cozy gray sofa with a magazine, or meditate in the leafy courtyard garden.',
  guests: 4,
  bedrooms: 2,
  beds: 2,
  baths: 1,
  prices: 180,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.746309,
  lng: -122.414336,
  address: "99-41 Manchester St",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94110",
  air_conditioning: false,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing6 = Listing.create!(
  host_id: james.id,
  title: 'Serene, Japanese-Inspired Room in House near Washington Square',
  description: 'Wake up rejuvenated in the privacy of this quiet room set in an updated mid-century home. Enjoy panoramic nature and ocean views from the bright Japanese-inspired living space surrounded by original art and tansu furnishings. FREE street parking.  For same day bookings, please allow one hour for Host to prepare for your arrival.',
  guests: 4,
  bedrooms: 2,
  beds: 3,
  baths: 1,
  prices: 175,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.800407,
  lng: -122.416544,
  address: "1943 Taylor St",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94133",
  air_conditioning: false,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: false,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: false,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing7 = Listing.create!(
  host_id: bosco.id,
  title: 'Quiet, Colorful Modern Apartment with Garden Patio',
  description: 'Rest and relax in this quiet, contemporary retreat in a historic San Francisco home. Enjoy privacy in this bright, open apartment featuring mid-century modern furnishings, custom French doors, bright splashes of color, and a lush outdoor space.',
  guests: 5,
  bedrooms: 4,
  beds: 3,
  baths: 1,
  prices: 210,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.8050615,
  lng: -122.4203998,
  address: "698 Bay St",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94133",
  air_conditioning: false,
  coffee_maker: false,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: false,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: true,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing8 = Listing.create!(
  host_id: grace.id,
  title: 'Explore the City from a Room in a Cali-Cool Apartment',
  description: 'Unwind in California style from a room in this warm designer apartment situated in San Francisco\'s most vibrant and inspiring neighborhood. Enjoy the open layout, huge windows, island snack bar, thoughtful decor, and an array of plants.',
  guests: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  prices: 299,
  img_url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80",
  lat: 37.7856829,
  lng: -122.4327662,
  address: "1746 Post St",
  city: "San Francisco",
  state: "California",
  country: "USA",
  zip_code: "94115",
  air_conditioning: false,
  coffee_maker: true,
  bathroom_essentials: true,
  indoor_fireplace: true,
  first_aid_kit: false,
  free_parking: true,
  game_console: false,
  gym: false,
  kitchen: true,
  hair_dryer: true,
  heating: true,
  iron: true,
  laptop_friendly_workspace: true,
  patio: false,
  refrigerator: false,
  tv: true,
  washer: true,
  wifi: true,
  self_check_in: true
);

sf_listing1.photos.attach(io: sf1_1, filename: 'sf1_1.jpg');
sf_listing1.photos.attach(io: sf1_2, filename: 'sf1_2.jpg');
sf_listing1.photos.attach(io: sf1_3, filename: 'sf1_3.jpg');
sf_listing1.photos.attach(io: sf1_4, filename: 'sf1_4.jpg');
sf_listing1.photos.attach(io: sf1_5, filename: 'sf1_5.jpg');

sf_listing2.photos.attach(io: sf2_1, filename: 'sf2_1.jpg');
sf_listing2.photos.attach(io: sf2_2, filename: 'sf2_2.jpg');
sf_listing2.photos.attach(io: sf2_3, filename: 'sf2_3.jpg');
sf_listing2.photos.attach(io: sf2_4, filename: 'sf2_4.jpg');
sf_listing2.photos.attach(io: sf2_5, filename: 'sf2_5.jpg');

sf_listing3.photos.attach(io: sf3_1, filename: 'sf3_1.jpg');
sf_listing3.photos.attach(io: sf3_2, filename: 'sf3_2.jpg');
sf_listing3.photos.attach(io: sf3_3, filename: 'sf3_3.jpg');
sf_listing3.photos.attach(io: sf3_4, filename: 'sf3_4.jpg');
sf_listing3.photos.attach(io: sf3_5, filename: 'sf3_5.jpg');

sf_listing4.photos.attach(io: sf4_1, filename: 'sf4_1.jpg');
sf_listing4.photos.attach(io: sf4_2, filename: 'sf4_2.jpg');
sf_listing4.photos.attach(io: sf4_3, filename: 'sf4_3.jpg');
sf_listing4.photos.attach(io: sf4_4, filename: 'sf4_4.jpg');
sf_listing4.photos.attach(io: sf4_5, filename: 'sf4_5.jpg');

sf_listing5.photos.attach(io: sf5_1, filename: 'sf5_1.jpg');
sf_listing5.photos.attach(io: sf5_2, filename: 'sf5_2.jpg');
sf_listing5.photos.attach(io: sf5_3, filename: 'sf5_3.jpg');
sf_listing5.photos.attach(io: sf5_4, filename: 'sf5_4.jpg');
sf_listing5.photos.attach(io: sf5_5, filename: 'sf5_5.jpg');

sf_listing6.photos.attach(io: sf6_1, filename: 'sf6_1.jpg');
sf_listing6.photos.attach(io: sf6_2, filename: 'sf6_2.jpg');
sf_listing6.photos.attach(io: sf6_3, filename: 'sf6_3.jpg');
sf_listing6.photos.attach(io: sf6_4, filename: 'sf6_4.jpg');
sf_listing6.photos.attach(io: sf6_5, filename: 'sf6_5.jpg');

sf_listing7.photos.attach(io: sf7_1, filename: 'sf7_1.jpg');
sf_listing7.photos.attach(io: sf7_2, filename: 'sf7_2.jpg');
sf_listing7.photos.attach(io: sf7_3, filename: 'sf7_3.jpg');
sf_listing7.photos.attach(io: sf7_4, filename: 'sf7_4.jpg');
sf_listing7.photos.attach(io: sf7_5, filename: 'sf7_5.jpg');

sf_listing8.photos.attach(io: sf8_1, filename: 'sf8_1.jpg');
sf_listing8.photos.attach(io: sf8_2, filename: 'sf8_2.jpg');
sf_listing8.photos.attach(io: sf8_3, filename: 'sf8_3.jpg');
sf_listing8.photos.attach(io: sf8_4, filename: 'sf8_4.jpg');
sf_listing8.photos.attach(io: sf8_5, filename: 'sf8_5.jpg');

sf_booking1 = Booking.create!(listing_id: sf_listing1.id, guest_id: kevin.id, start_date: 20181212, end_date: 20181215, num_guests: 2);
sf_booking2 = Booking.create!(listing_id: sf_listing1.id, guest_id: james.id, start_date: 20181223, end_date: 20181226, num_guests: 1);
sf_booking3 = Booking.create!(listing_id: sf_listing1.id, guest_id: stephen.id, start_date: 20181212, end_date: 20181215, num_guests: 2);

sf_booking4 = Booking.create!(listing_id: sf_listing2.id, guest_id: claire.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
sf_booking5 = Booking.create!(listing_id: sf_listing2.id, guest_id: demo.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
sf_booking6 = Booking.create!(listing_id: sf_listing2.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 2);

sf_booking7 = Booking.create!(listing_id: sf_listing3.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);
sf_booking8 = Booking.create!(listing_id: sf_listing3.id, guest_id: grace.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
sf_booking9 = Booking.create!(listing_id: sf_listing3.id, guest_id: demo.id, start_date: 20181213, end_date: 20181218, num_guests: 1);

sf_booking10 = Booking.create!(listing_id: sf_listing4.id, guest_id: grace.id, start_date: 20181220, end_date: 20181221, num_guests: 1);
sf_booking11 = Booking.create!(listing_id: sf_listing4.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
sf_booking12 = Booking.create!(listing_id: sf_listing4.id, guest_id: claire.id, start_date: 20181226, end_date: 20181227, num_guests: 2);

sf_booking13 = Booking.create!(listing_id: sf_listing5.id, guest_id: kyle.id, start_date: 20181203, end_date: 20181209, num_guests: 1);
sf_booking14 = Booking.create!(listing_id: sf_listing5.id, guest_id: demo.id, start_date: 20181226, end_date: 20181231, num_guests: 2);
sf_booking15 = Booking.create!(listing_id: sf_listing5.id, guest_id: stephen.id, start_date: 20181205, end_date: 20181208, num_guests: 2);

sf_booking16 = Booking.create!(listing_id: sf_listing6.id, guest_id: kyle.id, start_date: 20181205, end_date: 20181209, num_guests: 2);
sf_booking17 = Booking.create!(listing_id: sf_listing6.id, guest_id: james.id, start_date: 20191226, end_date: 20191228, num_guests: 1);
sf_booking18 = Booking.create!(listing_id: sf_listing6.id, guest_id: bosco.id, start_date: 20181213, end_date: 20181218, num_guests: 2);

sf_booking19 = Booking.create!(listing_id: sf_listing7.id, guest_id: claire.id, start_date: 20181220, end_date: 20181225, num_guests: 2);
sf_booking20 = Booking.create!(listing_id: sf_listing7.id, guest_id: kevin.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
sf_booking21 = Booking.create!(listing_id: sf_listing7.id, guest_id: grace.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

sf_booking22 = Booking.create!(listing_id: sf_listing8.id, guest_id: kyle.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
sf_booking23 = Booking.create!(listing_id: sf_listing8.id, guest_id: kevin.id, start_date: 20181220, end_date: 20181225, num_guests: 1);
sf_booking24 = Booking.create!(listing_id: sf_listing8.id, guest_id: demo.id, start_date: 20181220, end_date: 20181225, num_guests: 2);

sf_review1 = Review.create!(
  reviewer_id: sf_booking1.guest_id, listing_id: sf_booking1.listing_id, booking_id: sf_booking1.id,
  body: 'Beautiful place and lovely views. Loved it!!!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review2 = Review.create!(
  reviewer_id: sf_booking2.guest_id, listing_id: sf_booking1.listing_id, booking_id: sf_booking2.id,
  body: 'Perfect fully furnished get away for my trip to SF. Every possible amenity I needed and lots of extras too. Stephen was very thoughtful and had great ideas for dining out. Highly recommend this Heirbnb And the fantastic view of the city!',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review3 = Review.create!(
  reviewer_id: sf_booking3.guest_id, listing_id: sf_booking1.listing_id, booking_id: sf_booking3.id,
  body: 'Stephen\'s place was a beautiful getaway from the city. Perched in the quiet corner of Potrero Hill, it offers some of the best views in the city right outside its fantastically large windows.',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review4 = Review.create!(
  reviewer_id: sf_booking4.guest_id, listing_id: sf_booking2.listing_id, booking_id: sf_booking4.id,
  body: 'Grace really knows how to make guests feel like they are staying in a five-star hotel - except it\'s her beautiful home!',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

sf_review5 = Review.create!(
  reviewer_id: sf_booking5.guest_id, listing_id: sf_booking2.listing_id, booking_id: sf_booking5.id,
  body: 'FANTASTIC place to stay! The room is surprisingly quite and super spacious and comfy. Grace is incredibly gracious and lovely!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

sf_review6 = Review.create!(
  reviewer_id: sf_booking6.guest_id, listing_id: sf_booking2.listing_id, booking_id: sf_booking6.id,
  body: 'Great place to stay. I would highly recommend it and Grace was very accommodating.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

sf_review7 = Review.create!(
  reviewer_id: sf_booking7.guest_id, listing_id: sf_booking3.listing_id, booking_id: sf_booking7.id,
  body: 'This is a large apartment for 2 people in one of the best neighborhoods in SF. Check-in was super easy - Claire was extremely attentive and helpful. The bed was comfy to boot!',
  accuracy: 4, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review8 = Review.create!(
  reviewer_id: sf_booking8.guest_id, listing_id: sf_booking3.listing_id, booking_id: sf_booking8.id,
  body: 'My husband and I had a wonderful time at Kate\'s place. It was so comfortable, great location, and Claire was a dream to work with. My only regret is not staying longer!',
  accuracy: 5, location: 4,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review9 = Review.create!(
  reviewer_id: sf_booking9.guest_id, listing_id: sf_booking3.listing_id, booking_id: sf_booking9.id,
  body: 'Fantastic location in safe neighborhood. I highly recommend staying here. Claire is a great host and easy to communicate with.',
  accuracy: 5, location: 5,communication: 4, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review10 = Review.create!(
  reviewer_id: sf_booking10.guest_id, listing_id: sf_booking4.listing_id, booking_id: sf_booking10.id,
  body: 'I give James\'s home my highest recommendation. James is an outstanding host and goes above and beyond to make a stay in San Francisco a wonderful experience. He is incredibly responsive and helped sort out what could have been a nightmare situation.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

sf_review11 = Review.create!(
  reviewer_id: sf_booking11.guest_id, listing_id: sf_booking4.listing_id, booking_id: sf_booking11.id,
  body: 'Fantastic location. Very nice room. Very private. Lots of brochures for local attractions. Fast communication responses. Made our experience great.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

sf_review12 = Review.create!(
  reviewer_id: sf_booking12.guest_id, listing_id: sf_booking4.listing_id, booking_id: sf_booking12.id,
  body: 'James provides a comfortable room with easy access and privacy. Thank you James!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

sf_review13 = Review.create!(
  reviewer_id: sf_booking13.guest_id, listing_id: sf_booking5.listing_id, booking_id: sf_booking13.id,
  body: 'The apartment is lovely and very nicely furnished. The fresh flowers on the kitchen table were beautiful. The nights were quiet and we slept well.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

sf_review14 = Review.create!(
  reviewer_id: sf_booking14.guest_id, listing_id: sf_booking5.listing_id, booking_id: sf_booking14.id,
  body: 'What a wonderful place. It\'s no wonder it\'s always booked! Cozy and comfortable, I will be back!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

sf_review15 = Review.create!(
  reviewer_id: sf_booking15.guest_id, listing_id: sf_booking5.listing_id, booking_id: sf_booking15.id,
  body: 'Definitely recommend! There were four of us who stayed in their place. Klay\'s place was very clean, stylish, spacious, "homie".',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

sf_review16 = Review.create!(
  reviewer_id: sf_booking16.guest_id, listing_id: sf_booking6.listing_id, booking_id: sf_booking16.id,
  body: 'If you are looking for a place to stay in SF look no further. James is the ultimate host.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

sf_review17 = Review.create!(
  reviewer_id: sf_booking17.guest_id, listing_id: sf_booking6.listing_id, booking_id: sf_booking17.id,
  body: 'If you like a clean home, look no further, this place sparkles! James is a warm and caring host and knows the entire area well and can help you navigate if necessary. His home is in a very safe and walkable area, be sure to take a hike up to Twin Peaks from her house, maybe 15 minutes.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

sf_review18 = Review.create!(
  reviewer_id: sf_booking18.guest_id, listing_id: sf_booking6.listing_id, booking_id: sf_booking18.id,
  body: 'James welcomed my boyfriend and I with open arms. He is so accommodating and kind and made us feel right at home. He keeps his place impeccable with lovely amenities including breakfast. James had plenty of suggestions to visit in San Francisco, which really helped since it was both of our first times visiting.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

sf_review19 = Review.create!(
  reviewer_id: sf_booking19.guest_id, listing_id: sf_booking7.listing_id, booking_id: sf_booking19.id,
  body: 'Excellent location made it easy to explore and the awesome accommodation from Bosco was a restful sanctuary after a long day.',
  accuracy: 5, location: 5,communication: 5, check_in: 4, cleanliness: 5, value: 5, rating: 5
);

sf_review20 = Review.create!(
  reviewer_id: sf_booking20.guest_id, listing_id: sf_booking7.listing_id, booking_id: sf_booking20.id,
  body: 'Great space. Bosco is a really helpful and great host! Love the location - walkable to so much!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 4, value: 5, rating: 5
);

sf_review21 = Review.create!(
  reviewer_id: sf_booking21.guest_id, listing_id: sf_booking7.listing_id, booking_id: sf_booking21.id,
  body: 'Wonderful apartment for two people. Recently refurbished, the space (where I’ve stayed before) is now sublime. You have everything you need for dining in (whether cooking or take out). Plus the location can’t be beat — near public transportation w relatively easy on-street parking.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 4, rating: 5
);

sf_review22 = Review.create!(
  reviewer_id: sf_booking22.guest_id, listing_id: sf_booking8.listing_id, booking_id: sf_booking22.id,
  body: 'This was our first Heirbnb experience and wow what a positive one it was! Grace was extremely helpful in navigating me through the whole process. Her place was immaculately clean, the bed was amazing comfortable, and the neighborhood had all that we needed.',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review23 = Review.create!(
  reviewer_id: sf_booking23.guest_id, listing_id: sf_booking8.listing_id, booking_id: sf_booking23.id,
  body: 'Apartment is super clean and specious! The host Grace was very attentive and thoughtful. 5 stars!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);

sf_review24 = Review.create!(
  reviewer_id: sf_booking24.guest_id, listing_id: sf_booking8.listing_id, booking_id: sf_booking24.id,
  body: 'Grace\'s place was wonderful! Nice natural light, great area, plenty of room, and perfectly decorated. I truly felt at home. Se was very accommodating and friendly through our interactions!!',
  accuracy: 5, location: 5,communication: 5, check_in: 5, cleanliness: 5, value: 5, rating: 5
);
