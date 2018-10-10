json.partial! "api/users/user", user: @user
# 
# if @listings
#   json.listings do
#     @listings.each do |listing|
#       json.set! listing.id do
#         json.partial! '/api/listings/listing', listing: listing
#       end
#     end
#   end
# end
#
# if @bookings
#   json.bookings do
#     @bookings.each do |booking|
#       json.set! booking.id do
#         json.partial! '/api/bookings/booking', booking: booking
#       end
#     end
#   end
# end
#
# if @reviews
#   json.reviews do
#     @reviews.each do |review|
#       json.set! review.id do
#         json.partial! '/api/reviews/review', review: review
#       end
#     end
#   end
# end
