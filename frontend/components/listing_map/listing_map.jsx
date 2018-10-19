import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const oldMapOptions = {
  center: {
    lat: 40.715494,
    lng: -74.002209
  },
  zoom: 11
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class ListingMap extends React.Component {

  componentDidMount () {
    const map = this.refs.map;
    let mapOptions;
    if (this.props.singleListing) {

      mapOptions = {
        center: {
          lat: parseFloat(this.props.singleListing.lat),
          lng: parseFloat(this.props.singleListing.lng)
        },
        zoom: 14,
      };
    } else {
      mapOptions = {
        center: {
          lat: this.props.lat,
          lng: this.props.lng
        },
        zoom: 11,
      };
    }

    let searchInput = document.getElementsByClassName('search-bar')[0];
    this.map = new google.maps.Map(map, mapOptions);

    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.singleListing) {
      this.props.fetchListing(this.props.singleListing.id);
    } else {
      this.searchBox = new google.maps.places.SearchBox(searchInput);
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  handleMarkerClick(listing) {
    this.props.history.push(`/listings/${listing.id}`);
  }

  registerListeners () {
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = getCoordsObj(event.latLng);
    // });

    this.searchBox.addListener('places_changed', () => {
      let places = this.searchBox.getPlaces();
      let bounds = new google.maps.LatLngBounds();
      bounds.union(places[0].geometry.viewport);
      this.map.fitBounds(bounds);
    });

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };

      this.props.updateFilter('bounds', bounds);
    });
  }

  componentDidUpdate() {
    if (this.props.singleListing) {
      this.MarkerManager.updateMarkers([this.props.singleListing]);
    } else {
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  render () {
    return (
      <div className='map-container' ref='map'></div>
    )
  }
}

export default withRouter(ListingMap);
