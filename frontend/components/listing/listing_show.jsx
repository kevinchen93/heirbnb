import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
import { AuthRoute, ProtectedRoute, ProtectedRenderRoute } from '../../util/route_api_util';
import CreateBookingFormContainer from '../booking/create_booking_form_container';
import ListingMap from '../listing_map/listing_map';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
    window.scrollTo(0,0);
  }

  render() {
    const { listing, reviews, users } = this.props;
    if (!listing) {
      return <div className="loading-text">Loading...</div>;
    };

    let reviewHeaderContainer;
    if (listing.review_ids.length === 1) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Review</div>);
    } else if (listing.review_ids.length > 1) {
      reviewHeaderContainer = (<div className="review-length-header">{listing.review_ids.length} Reviews</div>);
    }

    const reviewElements = listing.review_ids.map( reviewId => {
      const review = reviews[reviewId];
      if (!review) return null;

      const reviewer = users[review.reviewer_id];

      const monthsArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const date = new Date (Date.parse(review.created_at));
      const month = monthsArray[parseInt(date.getMonth())];
      const year = date.getFullYear();

      const ratings = review.rating

      let reviewHeading;
      if (listing.review_ids.length === 1) {
        reviewHeading = "Review"
      } else {
        reviewHeading = "Reviews"
      }

      let numReviews;
      if (listing.review_ids.length === 1) {
        numReviews = 'No reviews';
      } else {
        numReviews = listing.review_ids.length;
      }

      return (
        <div className="review-container" key={review.id}>
          <div className="review-content-container">
            <div className="review-header">
              <div className="user-icon"></div>
              <div className="review-user-date-container">
                <div>
                  <div className="review-user-text">
                    {reviewer.first_name}
                  </div>
                  <div className="review-content-text">{month} {year}</div>
                </div>
                <ReactStars
                  value={review.rating ? review.rating : 0}
                  count={5}
                  size={12}
                  edit={review.rating ? false : true}
                  color2={'#008489'} />
              </div>
            </div>
            <div key={review.id} className="review-content-text review-content-body">{review.body}</div>
          </div>
          <div className="separator"></div>
        </div>
      )
    });

    return (
      <div>
        <img className="listing-show-image" src={listing.img_url}></img>
        <CreateBookingFormContainer prices={listing.prices} numReviews={listing.review_ids.length} />

        <div className="listing-show-container">
          <span style={{ color: "#734f21", fontSize: "12px", fontWeight: "800" }}>PRIVATE ROOM IN APARTMENT</span>
          <div className="listing-show-title">{listing.title}</div>
          <span className="listing-show-description">New York</span>
          <div className="listing-show-content">
            <div className="listing-show-commodities">
              <i style={{ width: "12.5px", height: "19px", paddingRight: "8px" }} className="fas fa-user-friends"></i>&nbsp;{listing.guests}
              <i style={{ width: "12.5px", height: "19px", paddingRight: "8px", paddingLeft: "12px" }} className="fas fa-warehouse"></i>&nbsp;{listing.bedrooms}
              <i style={{ width: "12.5px", height: "19px", paddingRight: "8px", paddingLeft: "12px" }} className="fas fa-bed"></i>&nbsp;{listing.beds}
              <i style={{ width: "12.5px", height: "19px", paddingRight: "8px", paddingLeft: "12px" }} className="fas fa-bath"></i>{listing.baths}
            </div>
            <div className="listing-show-description">
              {listing.description}
            </div>
            <div className="separator"></div>
            <div className="house-rules-header">Amenities</div>
            <div className="amenities-container">
              <ul>

                <li>
                  <svg className="amenities-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="M22.5 23H21V1h1.5a.5.5 0 0 0 0-1H.5a.5.5 0 1 0 0 1H2v22H.5a.5.5 0 1 0 0 1h22a.5.5 0 0 0 0-1zM11 3v20H3V1h8v2zm9 20h-8V1h8v22zM4.146 10.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L7 9.707V14.5a.5.5 0 0 1-1 0V9.707l-1.146 1.147a.5.5 0 0 1-.708 0zm10 2a.5.5 0 1 1 .708-.708L16 13.293V8.5a.5.5 0 1 1 1 0v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2z" fillRule="evenodd">
                    </path>
                  </svg>
                  Elevator
                </li>
                <li>
                  <svg className="amenities-icon"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="m22 10v-2.5a1.5 1.5 0 0 0 -2.06-1.39 1.5 1.5 0 0 0 -2.94.39v3.5h-10v-3.5a1.5 1.5 0 0 0 -1.5-1.5c-.7 0-1.27.47-1.44 1.11a1.5 1.5 0 0 0 -2.06 1.39v2.5c-1.1 0-2 .89-2 2s .89 2 2 2v2.5a1.5 1.5 0 0 0 2.06 1.39 1.5 1.5 0 0 0 2.94-.39v-3.5h10v3.5a1.5 1.5 0 0 0 1.5 1.5c.7 0 1.27-.47 1.44-1.11a1.5 1.5 0 0 0 2.06-1.38v-2.51c1.11 0 2-.89 2-2s-.9-2-2-2zm-20 3c-.56 0-1-.45-1-1a1 1 0 0 1 1-1zm1.5 4a .5.5 0 0 1 -.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9.01a.5.5 0 0 1 -.5.5zm2.5.5a.5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm11-4.5h-10v-2h10zm2-5.5v10a .5.5 0 1 1 -1 0v-11a .5.5 0 1 1 1 0zm2 9.01a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-9.01c0-.28.22-.5.5-.5s.5.22.5.5zm1-3.51v-2a1 1 0 0 1 1 1c0 .56-.44 1-1 1z" fillRule="evenodd">
                    </path>
                  </svg>
                  Gym
                </li>
                <li>
                  <svg className="amenities-icon"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m10.5 0a .5.5 0 0 0 -.5.5v7a .5.5 0 0 1 -.49.5h-1.51v-7.5a.5.5 0 1 0 -1 0v7.5h-1.51a.5.5 0 0 1 -.49-.5v-7a .5.5 0 1 0 -1 0v7c0 .83.67 1.5 1.49 1.5h1.51v5c0 .03.01.06.02.09a1.49 1.49 0 0 0 -1.02 1.41v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.66-.43-1.21-1.02-1.41.01-.03.02-.06.02-.09v-5h1.51a1.5 1.5 0 0 0 1.49-1.5v-7a .5.5 0 0 0 -.5-.5zm-2.5 15.5v7a .5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5zm11.5-15.5h-2c-1.4 0-2.5 1.07-2.5 2.5v7c0 1.43 1.1 2.5 2.5 2.5h1.5v2.09a1.49 1.49 0 0 0 -.5-.09c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-22.5zm-2 11c-.86 0-1.5-.63-1.5-1.5v-7c0-.87.65-1.5 1.5-1.5h1.5v10zm1.5 11.5a.5.5 0 0 1 -.5.5.5.5 0 0 1 -.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5z" fillRule="evenodd"></path>
                </svg>
                Kitchen
              </li>
              </ul>
              <ul>
                <li>
                  <svg className="amenities-icon"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="m12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5.92-5.78a.5.5 0 1 1 -.84.55c-1.19-1.81-3.07-2.77-5.08-2.77s-3.89.96-5.08 2.78a.5.5 0 0 1 -.84-.55c1.38-2.1 3.58-3.23 5.92-3.23s4.54 1.13 5.92 3.23zm2.98-3.03a.5.5 0 1 1 -.79.61c-1.66-2.14-5.22-3.8-8.11-3.8-2.83 0-6.26 1.62-8.12 3.82a.5.5 0 0 1 -.76-.65c2.05-2.42 5.75-4.17 8.88-4.17 3.19 0 7.05 1.8 8.9 4.19zm2.95-2.33a.5.5 0 0 1 -.71-.02c-2.94-3.07-6.71-4.84-11.14-4.84s-8.2 1.77-11.14 4.85a.5.5 0 0 1 -.72-.69c3.12-3.27 7.14-5.16 11.86-5.16s8.74 1.89 11.86 5.16a.5.5 0 0 1 -.02.71z" fillRule="evenodd">
                    </path>
                  </svg>
                  Wifi
                </li>
                <li>
                  <svg className="amenities-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="m21.5 6h-9.07l3.49-5.22a.5.5 0 1 0 -.83-.55l-3.86 5.77h-2.46l-3.85-5.78a.5.5 0 0 0 -.83.55l3.48 5.23h-5.07a2.5 2.5 0 0 0 -2.5 2.5v13c0 1.39 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.12-2.5-2.5-2.5zm1.5 15.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.67 1.5 1.5zm-6.49-12.5h-11.02a2.49 2.49 0 0 0 -2.49 2.49v7.02a2.5 2.5 0 0 0 2.49 2.49h11.02a2.49 2.49 0 0 0 2.49-2.49v-7.02a2.5 2.5 0 0 0 -2.49-2.49zm1.49 9.51c0 .82-.67 1.49-1.49 1.49h-11.02c-.82 0-1.49-.67-1.49-1.49v-7.02c0-.82.67-1.49 1.49-1.49h11.02c.82 0 1.49.67 1.49 1.49zm4-8.51a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd">
                    </path>
                  </svg>
                  Cable TV
                </li>
                <li>
                  <svg className="amenities-icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                    <path d="m21.5 6h-9.07l3.49-5.22a.5.5 0 1 0 -.83-.55l-3.86 5.77h-2.46l-3.85-5.78a.5.5 0 0 0 -.83.55l3.48 5.23h-5.07a2.5 2.5 0 0 0 -2.5 2.5v13c0 1.39 1.12 2.5 2.5 2.5h19c1.38 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.12-2.5-2.5-2.5zm1.5 15.5c0 .83-.68 1.5-1.5 1.5h-19c-.83 0-1.5-.67-1.5-1.5v-13c0-.83.68-1.5 1.5-1.5h19c .83 0 1.5.67 1.5 1.5zm-6.49-12.5h-11.02a2.49 2.49 0 0 0 -2.49 2.49v7.02a2.5 2.5 0 0 0 2.49 2.49h11.02a2.49 2.49 0 0 0 2.49-2.49v-7.02a2.5 2.5 0 0 0 -2.49-2.49zm1.49 9.51c0 .82-.67 1.49-1.49 1.49h-11.02c-.82 0-1.49-.67-1.49-1.49v-7.02c0-.82.67-1.49 1.49-1.49h11.02c.82 0 1.49.67 1.49 1.49zm4-8.51a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm0 3a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z" fillRule="evenodd">
                    </path>
                  </svg>
                  Washer
                </li>
              </ul>
            </div>
            <div className="separator"></div>
            <div className="house-rules-header">Accessibility</div>
            <div className="amenities-container">
              <ul>
                <li>Well-lit path to entrance</li>
              </ul>
              <ul>
                <li>Wide hallway clearance</li>
              </ul>
            </div>
            {reviewHeaderContainer}
            <div className="separator"></div>
            {reviewElements}
          </div>
          <div className="the-neighborhood-header">The neighborhood</div>
          <div className="show-page-map">
            <ListingMap singleListing={listing} lat={listing.lat} lng={listing.lng} fetchListing={this.props.fetchListing} />
          </div>
          <div className="the-neighborhood-header">Policies</div>
          <div className="house-rules-header">House Rules</div>
          <div className="review-content-text review-content-body">No pets</div>
          <div className="review-content-text review-content-body">No parties or events</div>
          <div className="review-content-text review-content-body">Check-in time is 4PM-7PM</div>
          <div className="review-content-text review-content-body">Check out by noon</div>
          <div className="separator"></div>
          <div className="house-rules-header">Cancellations</div>
          <div className="strict-text">Strict</div>
          <div className="review-content-text">Cancel up to 30 days before check-in and get a full refund.</div>
        </div>
      </div>
    );
  }
}

export default ListingShow;
