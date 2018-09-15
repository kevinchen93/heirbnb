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
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Start Date
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('start_date')} />
          </label>

          <label>End Date
            <input
              type="text"
              value={this.state.end_date}
              onChange={this.update('end_date')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default withRouter(BookingForm);
