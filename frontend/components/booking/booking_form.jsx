import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.booking;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <form className="booking-form-container" onSubmit={this.handleSubmit}>
          <label>Start Date
            <input
              type="text"
              value={this.state.start_date}
              onChange={this.update('start_date')} />
          </label>

          <label>End Date
            <input
              type="text"
              value={this.state.end_date}
              onChange={this.update('end_date')} />
          </label>

          <input className="listing-submit-button" type="submit" value="Book" />
        </form>
      </div>
    )
  }
}

export default withRouter(BookingForm);
