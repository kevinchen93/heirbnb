import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentWillReceiveProps(nextPros) {
    if (this.props.listing.id != nextProps.match.params.listingId) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  render() {
    const { listing } = this.props;
    if (!listing) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <Link to={"/"}>Back to Index</Link>
      </div>
    );
  }
}

export default ListingShow;
