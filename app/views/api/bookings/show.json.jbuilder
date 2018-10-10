json.partial! 'api/bookings/booking', booking: @booking

#change this json to return the listing's img_url
#only grabbing from one spot
#no need to update in multiple places in client-side
#components are hitting that single endpoint

#or

#go to client-side and fetch listings along with fetching all bookings for that user
#making 2 requests here

# tips
# dependencies should be concentrated in one place/condense dependencies into one area
# so edits from other people should occur in one place rather than multiple places
# ex. action creators
# if we want to change the action type, we can just head to the action creators and make the change
