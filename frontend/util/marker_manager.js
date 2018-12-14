class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.handleClick = this.handleClick.bind(this);
  }

  updateMarkers(listings) {

    const listingsObj = {};

    listings.forEach(listing => listingsObj[listing.id] = listing);
    listings.filter(listing => !this.markers[listing.id]).forEach(newListing => this.createMarkerFromlisting(newListing));
    Object.keys(this.markers).filter(listingId => !listingsObj[listingId]).forEach(listingId => this.removeMarker(this.markers[listingId]));
  }

  createMarkerFromlisting(listing) {
    const { lat, lng } = listing;

    const mapIcon = {
      path: "m22,-28.38281l-44,0l0,20l16,0l6,5l6,-5l16,0l0,-20z",
      labelOrigin: new google.maps.Point(0, -18),
      fillColor: "white",
      fillOpacity: 1,
      scale: 1.15,
      strokeColor: "grey",
      strokeWeight: 0.5,
    };

    this.markers[listing.id] = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: listing.name,
      listingId: listing.id,
      label: "$" + String(listing.prices),
      icon: mapIcon,
      animation: google.maps.Animation.DROP
    });

    let marker = this.markers[listing.id];
    marker.addListener('click', () => this.handleClick(listing))
    marker.setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }

  handleClick(listing) {
    this.props.history.push(`/listings/${listing.id}`);
  }
}

export default MarkerManager;
