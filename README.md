# Welcome to Heirbnb

<a href="https://heirbeenbee.herokuapp.com" target="_blank">Heirbnb</a> is a single-page, full stack web application inspired by Airbnb. It utilizes Ruby on Rails with a PostgreSQL database on the back-end, and React.js and Redux on the front-end. Users can view, create, book, and search for listings by location. Users can also review their stay!

## Key Features

[Heirbnb Design Documents](https://github.com/kevinchen93/heirbnb/wiki/)

### User Authentication
  * Users can sign up or log in to use the application.
  * Users can also log in through a demo account.

### Listings
  * Listings are displayed on the homepage.
  * A user is able to edit and delete his or her own listings.
  * Users are able to search for listings via Google Maps Places API.

### Bookings
  * A logged in user is able to view his or her bookings.
  * A logged in user is able to make valid bookings on listings and delete any booking he or she made.

### Reviews
  * A logged in user is able to leave a review on a booking.
  * A logged in user is able to edit an existing review.

## Technology Stack

Heirbnb is a single-page web application with one backend route responsible for rendering HTML. User interactions in the front-end side trigger AJAX requests to the back-end, which is responsible for rendering database information in JSON format.

### Front-end

#### React

The response information is taken by the [React JS library](https://reactjs.org/) to update the page.
  * One of the ways React is a useful tool for front-end development is creating a virtual DOM to make DOM manipulation efficient.

#### Redux

[Redux](https://redux.js.org/) manages the front-end state of Heirbnb. When database information is retrieved, Redux state is updated first and re-renders the appropriate React components.

### Back-end

#### Ruby on Rails

Ruby on Rails is the back-end framework used to query the database. [Read more](https://rubyonrails.org/)

### Database

Heirbnb uses a [PostgreSQL](https://www.postgresql.org/) database to store its relational data.

## Future Plans

  * Implement ability for users to upload profile pictures and edit profile page
  * Infinite scrolling or pagination on the index pages
  * Implement ability to interact with friends, i.e. messaging
  * Additional filters for listings
