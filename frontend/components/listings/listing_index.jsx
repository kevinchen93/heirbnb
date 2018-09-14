import React from 'react';
import ListingIndexItem from './listing_index_item';
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

    return (
      <div>
        <ul>
          {listings}
        </ul>
        <CreateListingFormContainer />
      </div>
    );
  }
}

export default ListingIndex;
