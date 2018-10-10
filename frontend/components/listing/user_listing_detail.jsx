import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

class UserListingDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.id).fail( () => this.props.history.push('/profile/listings') );
  }

  render() {
    if (!this.props.listing) {
      return <div>Loading...</div>;
    }

    return (
      <div className="user-listing-detail-container">

        <p>{this.props.listing.title}</p>
        <p>{this.props.listing.guests}</p>
        <p>{this.props.listing.prices}</p>
        <button onClick={ this.props.openModal }>Edit</button>
        <button onClick={ () => this.props.deleteListing(this.props.listing).then( () => this.props.history.push('/profile/listings')) }>DELETE</button>

      </div>
    )
  }
}

export default UserListingDetail;
