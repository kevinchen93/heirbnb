import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.listing;
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
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <label>Latitude
            <input
              type="text"
              value={this.state.lat}
              onChange={this.update('lat')} />
          </label>

          <label>Longitude
            <input
              type="text"
              value={this.state.lng}
              onChange={this.update('lng')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default withRouter(ListingForm);
