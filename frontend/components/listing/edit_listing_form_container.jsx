import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { fetchListing, updateListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultListing = {
    title: '',
    description: '',
    lat: '',
    lng: '',
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
