import React from 'react';
import { withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      start_date: null,
      end_date: null,
      focusedInput: null,
      listing_id: parseInt(props.match.params.listingId)
    };
  }

  componentDidMount() {
    this.props.clearBookingErrors();
  }

  isDayBooked(day) {
    console.log(day);
    const formattedDay = day.format('YYYY-MM-DD');
    console.log(formattedDay);
    const dates = this.props.listing.booked_dates.map(date => moment(date).format('YYYY-MM-DD'));
    return dates.includes(formattedDay);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    debugger
    const bookingParams = {
      start_date: this.state.start_date._d,
      end_date: this.state.end_date._d,
      listing_id: parseInt(props.match.params.listingId),
    };

    this.props.clearBookingErrors();
    e.preventDefault();
    this.props.action(bookingParams).then( () => this.props.history.push('/trips'));
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
    return (

      <div className="booking-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="booking-form-price">
            <span className="booking-form-price-text">${this.props.prices}</span>
            <span className="booking-form-text">per night</span>
          <div className="booking-form-text">{this.props.numReviews === 0 ? "No reviews" :
                                              this.props.numReviews === 1 ? "1" :
                                              this.props.numReviews} REVIEWS</div>
          </div>
          <div className="errors-div">
            {this.renderErrors()}
          </div>
          <div className="dates-container">
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
              isDayBlocked={day => this.isDayBooked(day)}
              showClearDates={true}
              reopenPickerOnClearDates={true}
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
              max={this.props.guestNum}/>
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

        <div className="report-link-container">
          <a href="https://github.com/kevinchen93">
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

export default withRouter(BookingForm);
