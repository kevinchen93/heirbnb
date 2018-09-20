import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { fetchListing, updateListing } from '../../actions/listing_actions';

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
  const listing = state.listings[ownProps.match.params.listingId] || defaultListing;
  const formType = 'Update Listing';

  return {
    listing,
    formType,
    currentUser: state.entities.users[state.session.currentUserId] };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    action: listing => dispatch(updateListing(listing)),
  };
};

class EditListingForm extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.listing.id != nextProps.match.params.listingId) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  render() {
    const { action, formType, listing } = this.props;
    return (
      <ListingForm
        action={action}
        formType={formType}
        listing={listing} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListingForm);
