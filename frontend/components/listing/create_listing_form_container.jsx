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
