export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    let currentListings = Array.from(listings);
    if (Object.keys(listings).length === 0) {
      currentListings = [];
    }

    currentListings.forEach(listing => listingsObj[listing.id] = listing);
    currentListings.filter(listing => !this.markers[listing.id]).forEach(newListing => this.createMarkerFromListing(newListing));

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId]).forEach(listingId => this.removeMarker(this.markeres[listingId]));
  }

  createMarkerFromListing(listing) {
    const listingCoords = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position: listingCoords,
      map: this.map,
      listingId: listing.id
    });

    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
