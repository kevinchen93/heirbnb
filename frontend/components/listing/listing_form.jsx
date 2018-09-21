import React from 'react';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

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
        <div className="listing-h1-container">
          <div className="listing-h1">Hi, {this.props.currentUser.first_name}!</div>
          <div className="listing-h1">Let's get started listing your space!</div>
        </div>
        <form className="listing-form-container" onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <div>Description
            <br />
            <textarea
              value={this.state.description}
              onChange={this.update('description')}>
            </textarea>
          </div>
          <br />

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

          <label>Guests
            <input
              type="text"
              value={this.state.guests}
              onChange={this.update('guests')} />
          </label>

          <label>Beds
            <input
              type="text"
              value={this.state.beds}
              onChange={this.update('beds')} />
          </label>

          <label>Bedrooms
            <input
              type="text"
              value={this.state.bedrooms}
              onChange={this.update('bedrooms')} />
          </label>

          <label>Baths
            <input
              type="text"
              value={this.state.baths}
              onChange={this.update('baths')} />
          </label>

          <label>Price
            <input
              type="text"
              value={this.state.prices}
              onChange={this.update('prices')} />
          </label>

          <label>Image URL
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.update('img_url')} />
          </label>

          <input className="listing-submit-button" type="submit" value={this.props.formType} />
        </form>

        <div className="current-user-listings-container">
          <h1 className="listing-h1">Your Listings</h1>
          <div className="separator"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingForm);
