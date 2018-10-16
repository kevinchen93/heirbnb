import React from 'react';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.listing;
  }

  update(field) {
    return (e) => {
      this.setState( {[field]: e.target.value} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/profile/listings'));
  }

  render() {
    return (
      <div className="create-listing-container">
        <div className="listing-h1-container">
          <div className="listing-h1">Hi, {this.props.currentUser.first_name}!</div>
          <div className="listing-h1">Let's get started listing your space!</div>
        </div>

        <form className="listing-form-container" onSubmit={this.handleSubmit}>
          <label className="listing-form-container-title">Title
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

        <div className="user-listing-params-container">
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

          <label className="listing-form-container-label">Image URL
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.update('img_url')} />
          </label>
        </div>

          <button className="listing-submit-button">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ListingForm);
