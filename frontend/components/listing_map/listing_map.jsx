import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="map-container" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(ListingMap);
