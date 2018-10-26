# Welcome to Heirbnb

Heirbnb is a single-page, full stack web application inspired by Airbnb. It utilizes Ruby on Rails with a PostgreSQL database on the backend, and React.js and Redux on the frontend. Users can view, create and book listings, and search for listings by location. Users can also review their stay! <a href="https://heirbeenbee.herokuapp.com" target="_blank">Visit Heirbnb here!</a>

## Key Features

[Heirbnb Design Documents](https://github.com/kevinchen93/heirbnb/wiki/)

### User Authentication
  * Users can sign up or log in to use the application.
  * Users can also log in through a demo account.

### Listings
  * Listings are displayed on the homepage.
  * A logged in user can create listings.
  * A user is able to edit and delete his or her own listings.
  * Users will be able to search for listings through listings search (by location and availability) and Google Maps search

### Bookings
  * A logged in user is able to view his or her current and past bookings.
  * A logged in user is able to make valid bookings on listings and delete any booking he or she made.

### Reviews
  * A logged in user is able to leave a review on a past booking.
  * A logged in user is able to edit an existing review.

### User Profile
  * A user's profile page will display all of his or her listings and reviews.
  * A user will be able to edit his or her own profile information from his or her own user page:
    * Profile photo

## Technology Stack

Heirbnb is a single-page application with one backend route responsible for rendering HTML. User interactions in the frontend side trigger AJAX requests to the backend, which are responsible for rendering database information in JSON format.

### Frontend

#### React

The response information is taken by the [React JS library](https://reactjs.org/) to update the page.
  * One of the ways React is a useful tool for frontend development is creating a virtual DOM to make DOM manipulation efficient.

#### Redux

[Redux](https://redux.js.org/) manages the frontend state of Heirbnb. When database information is retrieved, Redux state is updated first and re-renders the appropriate React components.

### Backend

#### Ruby on Rails

Ruby on Rails is the backend framework used to query the database. [Read more](https://rubyonrails.org/)

### Database

Heirbnb uses a [PostgreSQL](https://www.postgresql.org/) database to store its relational data.

## Future Plans

In the future, I would like to implement the social aspects of Airbnb, such as messaging between users. Also, I have plans to categorize accommodations to include experiences and restaurants.
