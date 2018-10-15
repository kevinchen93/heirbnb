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
          </div>
          <div className="errors-div">
            {this.renderErrors()}
          </div>
          <label>Check In
            <input
              type="date"
              value={this.state.start_date}
              onChange={this.update('start_date')} />
          </label>

          <label>Check Out
            <input
              type="date"
              value={this.state.end_date}
              onChange={this.update('end_date')} />
          </label>

          <button className="listing-submit-button">Request to Book</button>
        </form>
      </div>
    )
  }
}

export default withRouter(BookingForm);
