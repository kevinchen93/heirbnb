import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from './../../util/marker_manager';

class ListingMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7463094, lng: -73.9969477 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markers = {};
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  render() {
    return (
      <div style={{ position: "absolute" }} className="map-container" ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(ListingMap);
