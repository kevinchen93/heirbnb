import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  const listing = {
    title: '',
    description: '',
    lat: '',
    lng: '',
    guests: 1,
    baths: 1,
    beds: 1,
    bedrooms: 1,
    prices: 1,
    img_url: ''
  };
  const formType = 'Create Listing';

  return {
    listing,
    formType,
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: listing => dispatch(createListing(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);
