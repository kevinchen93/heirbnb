import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.listing.id != nextProps.match.params.listingId) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  render() {
    const { listing } = this.props;
    // if (!listing) {
    //   return <div>Loading...</div>;
    // }

    return (
      <div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
      </div>
    );
  }
}

export default ListingShow;
