import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7590403, lng: -74.0392709 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
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
