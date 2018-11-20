import React from 'react';
import ListingIndexContainer from './../listing/listing_index_container';
import ListingMap from '../listing_map/listing_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      lat: 40.715494,
      lng: -74.002209,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  render(){
    return (
      <div className="splash-page-map" >
        <ListingMap listings={this.props.listings} changeFilter={this.props.changeFilter} lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }

}

export default Search;
