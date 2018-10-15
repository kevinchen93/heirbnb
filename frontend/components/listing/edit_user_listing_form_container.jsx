import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchListing, updateListing } from '../../actions/listing_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultListing = {
    title: 'Default listing',
    description: 'Default description',
    lat: '37.7758',
    lng: '-122.435',
    guests: 1,
    baths: 1,
    beds: 1,
    bedrooms: 1,
    prices: 1,
    img_url: 'https://a0.muscache.com/im/pictures/6061582/a643208f_original.jpg?aki_policy=xx_large'
  };

  const listing = state.entities.listings[ownProps.customProps.match.params.listingId] || defaultListing;
  const formType = 'Update Listing';

  return {
    listing,
    formType,
    currentUser: state.entities.users[state.session.currentUserId] };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    updateListing: listing => dispatch(updateListing(listing)),
    deleteListing: listingId => dispatch(deleteListing(listingId)),
    closeModal: () => dispatch(closeModal()),
  };
};

class EditUserListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.listing;
  }

  componentDidMount() {
    this.props.fetchListing(this.props.customProps.match.params.listingId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.listing.id != nextProps.customProps.match.params.listingId) {
      this.props.fetchListing(nextProps.customProps.match.params.listingId);
    }
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateListing(this.state).then(this.props.closeModal);
  }

  render() {
    const { action, formType, listing } = this.props;
    return (
      <div>
        <form className="listing-form-container" onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange('title')} />
          </label>

          <div>Description
            <br />
            <textarea
              value={this.state.description}
              onChange={this.handleChange('description')}>
            </textarea>
          </div>
          <br />

          <label>Latitude
            <input
              type="text"
              value={this.state.lat}
              onChange={this.handleChange('lat')} />
          </label>

          <label>Longitude
            <input
              type="text"
              value={this.state.lng}
              onChange={this.handleChange('lng')} />
          </label>

          <label>Guests
            <input
              type="text"
              value={this.state.guests}
              onChange={this.handleChange('guests')} />
          </label>

          <label>Beds
            <input
              type="text"
              value={this.state.beds}
              onChange={this.handleChange('beds')} />
          </label>

          <label>Bedrooms
            <input
              type="text"
              value={this.state.bedrooms}
              onChange={this.handleChange('bedrooms')} />
          </label>

          <label>Baths
            <input
              type="text"
              value={this.state.baths}
              onChange={this.handleChange('baths')} />
          </label>

          <label>Price
            <input
              type="text"
              value={this.state.prices}
              onChange={this.handleChange('prices')} />
          </label>

          <label>Image URL
            <input
              type="text"
              value={this.state.img_url}
              onChange={this.handleChange('img_url')} />
          </label>

          <button className="listing-submit-button">{this.props.formType}</button>
        </form>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserListingForm);
