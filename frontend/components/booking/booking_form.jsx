import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      start_date: '',
      end_date: '',
      listing_id: parseInt(props.match.params.listingId)
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then( () => this.props.history.push('/trips'));
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
      <div>
        <form className="booking-form-container" onSubmit={this.handleSubmit}>
          <div className="booking-form-price">
            ${this.props.prices} <span className="booking-form-text">per night</span>
          <div className="booking-form-text">{this.props.numReviews === 0 ? "No reviews" :
                                              this.props.numReviews === 1 ? "1" :
                                              this.props.numReviews} REVIEWS</div>
          </div>
          <div className="errors-div">
            {this.renderErrors()}
          </div>
          <div className="booking-form-text">Dates</div>
          <div className="calendar-input">
            <label>
              <div>
                <input
                  className="check-in"
                  type="date"
                  value={ this.state.start_date }
                  onChange={this.update('start_date')} />
              </div>
            </label>


            <div className="arrow">
              <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height:24+'px',width: 24+'px',display:'inline-block',fill:'currentColor' }}>
                <path
                  d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"
                  fillRule="evenodd">
                </path>
              </svg>
            </div>

            <label>
              <input
                className="check-out"
                type="date"
                value={ this.state.end_date }
                onChange={this.update('end_date')} />
            </label>
          </div>
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <button className="booking-submit-button">Book</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(BookingForm);
