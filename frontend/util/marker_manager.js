class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {

    const listingsObj = {};
    //let currentListings = Array.from(listings);
    // if (Object.keys(listings).length === 0) {
    //   currentListings = [];
    // }
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
      strokeWeight: 0.5
    };

    this.markers[listing.id] = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: listing.name,
      listingId: listing.id,
      label: "$" + String(listing.prices),
      icon: mapIcon
    });

    let marker = this.markers[listing.id];
    marker.addListener('click', () => this.handleClick(listing))
    marker.setMap(this.map);
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;
