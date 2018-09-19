import React from 'react';
import ListingIndex from './../listing/listing_index';
import ListingMap from './../listing_map/listing_map';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      location: "New York"
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
        <input type="text" placeholder="Search Listings" />
        <div>
          <ListingMap listings={this.props.listings} updateFilter={this.props.updateFilter} />
          <ListingIndex listings={this.props.listings}/>
        </div>
      </div>
    );
  }

}

export default Search;
