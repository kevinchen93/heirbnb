import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 40.715494,
    lng: -74.002209
  },
  zoom: 11
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
})

class ListingMap extends React.Component {

  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);

  }

  registerListeners () {
    google.maps.event.addListener(this.map, 'click', event => {
      const coords = getCoordsObj(event.latLng);
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  handleMarkerClick (listing) {
    this.props.history.push(`/listings/${listing.id}`);
  }

  render () {
    return (
      <div className='map-container' ref='map'>
        Map
      </div>
    )
  }
}

export default withRouter(ListingMap);
