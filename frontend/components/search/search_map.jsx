import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class SearchMap extends React.Component {

  componentDidMount() {
    const query = this.props.location.search;
    const search = new URLSearchParams(query);
    this.lat = parseFloat(search.get('lat'));
    this.lng = parseFloat(search.get('lng'));

    const mapOptions = {
      center: {
        lat: this.lat,
        lng: this.lng
      },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.listings);
    this.registerListeners();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateFilter("bounds", bounds);
    });
  }

  componentWillReceiveProps(nextProps) {
    const prevLat = this.lat;
    const prevLng = this.lng;

    const query = this.props.location.search;
    const search = new URLSearchParams(query);
    this.lat = parseFloat(search.get('lat'));
    this.lng = parseFloat(search.get('lng'));
    if (this.lat !== prevLat || this.lng !== prevLng) {
      const mapOptions = {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 11
      };

      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      this.MarkerManager.updateMarkers(this.props.listings);
      this.registerListeners();
    }
  }

  componentWillReceiveProps(nextProps) {
      const prevLat = this.lat;
      const prevLng = this.lng;

      const query = this.props.location.search;
      const search = new URLSearchParams(query);
      this.lat = parseFloat(search.get('lat'));
      this.lng = parseFloat(search.get('lng'));

      if (this.lat !== prevLat || this.lng !== prevLng) {
        const mapOptions = {
          center: {
            lat: this.lat,
            lng: this.lng
          },
          zoom: 11
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(this.props.listings);

        this.registerListeners();
      }
  }

  componentWillUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  handleMarkerClick(listing) {
    this.props.history.push(`/listings/${listing.id}`);
  }

  render() {
    return (
      <div ref={ map => this.mapNode = map } className="search-map"></div>
    )
  }
}

export default withRouter(SearchMap);
