import React from 'react';
import ListingIndexItem from './listing_index_item';
import HeaderContainer from './../header/header_container';
import CreateListingFormContainer from './create_listing_form_container';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const listings = this.props.listings.map(listing => {
      return (
        <ListingIndexItem
          key={listing.id}
          listing={listing}
          deleteListing={this.props.deleteListing} />
      );
    });

    let indexClass;
    if (this.props.currentUser) {
      indexClass="logged-in-index-container";
    } else {
      indexClass="not-logged-in-index-container";
    }
    return (
      <div className={indexClass}>
        <ul className="listing-ul">
          {listings}
        </ul>
      </div>
    );
  }
}

export default ListingIndex;
