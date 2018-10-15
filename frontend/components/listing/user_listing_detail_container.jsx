import { connect } from 'react-redux';
import UserListingDetail from './user_listing_detail';
import { fetchListing, updateListing, deleteListing } from '../../actions/listing_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    id: ownProps.match.params.listingId,
    reviews: state.entities.reviews,
    users: state.entities.users,
  };
};

// add updateListing here
// /profile/listings/:listingId/edit would be edit_listing_detail_form

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    updateListing: listing => dispatch(updateListing(listing)),
    deleteListing: listing => dispatch(deleteListing(listing)),
    openModal: () => dispatch(openModal('edit listing', ownProps)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListingDetail);
