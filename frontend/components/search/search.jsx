import React from 'react';
import ListingIndexContainer from './../listing/listing_index_container';
import ListingMap from '../listing_map/listing_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      location: "New York",
    };
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      location: e.target.value
    });
  }

  render(){
    return (
      <div>
        <div>
          <ListingIndexContainer />
        </div>
      </div>
    );
  }

}

export default Search;
