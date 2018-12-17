import React from 'react';
import { withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

import { renderStars } from '../stars_show';
import LoadingDots from '../loading_dots';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      num_guests: 1,
      focusedInput: null,

      loading: false,
      redirect: false
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleGuestInput = this.handleGuestInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnMount() {
    if (this.props.errors) {
      this.props.clearBookingErrors();
    }
  }

  handleGuestInput(e) {
    this.setState({ num_guests: parseInt(e.currentTarget.value) });
  }

  isAlreadyBooked(date) {
    const formattedDate = date.format('YYYY-MM-DD');
    const dates = this.props.listing.booked_dates.map(date => moment(date).format('YYYY-MM-DD'));

    return dates.includes(formattedDate);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.props.currentUserId) {
      scrollTo(0,0);
      this.props.openModal('login');
    }

    const bookingParams = {
      listing_id: parseInt(this.props.match.params.listingId),
      start_date: this.state.start_date._d,
      end_date: this.state.end_date._d,
      num_guests: this.state.num_guests
    };

    setTimeout(() => this.setState({ loading: false }), 1500);
    this.setState({ loading: true });
    this.props.action(bookingParams).then(
      () => this.setState({ redirect: true }),
      () => this.setState({ redirect: false })
    );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const listing = this.props.listing;

    if (this.state.loading) {
      return <LoadingDots state={this.state} />;
    } else if (!listing) {
      return <div></div>
    } else {

      return (
        <div className="booking-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="booking-form-price">
              <span className="booking-form-price-text">${listing.prices}</span>
              <span className="booking-form-text">per night</span>
              <div className="booking-form-stars">{renderStars(listing.average_rating)}
                <p>{Object.keys(listing.reviews).length}</p>
              </div>
            </div>
            <div className="dates-container">
              <div className="errors-div">
                {this.renderErrors()}
              </div>
              <div className="booking-form-text">Dates</div>
              <DateRangePicker
                startDatePlaceholderText="Check In"
                endDatePlaceholderText="Check Out"
                startDateId="booking-form-startDate"
                endDateId="booking-form-endDate"
                startDate={this.state.start_date}
                endDate={this.state.end_date}
                onDatesChange={({ startDate, endDate }) => this.setState({ start_date: startDate, end_date: endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                isDayBlocked={date => this.isAlreadyBooked(date)}
                showClearDates={true}
                regular={true}
                />
            </div>

            <div className="guests-container">
              <div className="booking-form-text">Guests</div>
              <input
                className="guest-input"
                type="number"
                defaultValue="1"
                min="1"
                max={listing.guests}/>
            </div>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button className="booking-submit-button">Request to Book</button>
            </div>
            <div className="you-wont-be-charged-yet">You won't be charged yet</div>
            <div className="separator-24"></div>
            <div className="booking-facts">
              <div>
                <div className="mb-5 fs-14 fw-600">
                  This home is on people's minds.
                </div>
                <span className="fs-14 fw-400">
                  It’s been viewed 500+ times in the past week.
                </span>
              </div>
              <div className="lightbulb-img"></div>
            </div>
          </form>
          {this.state.redirect && this.props.history.push("/trips")}
          <div className="report-link-container">
            <a href="https://github.com/kevinchen93" target="_blank">
              <i className="far fa-flag"></i>
              <span>
                <div className="report-link fs-14 fw-300">Report this listing
                </div>
              </span>
            </a>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(BookingForm);
