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
    const listingLatLng = new google.maps.LatLng(parseFloat(listing.lat), parseFloat(listing.lng));
    const marker = new google.maps.Marker({
      position: listingLatLng,
      map: this.map,
      listingId: listing.id
    });

    marker.addListener("click", () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;
