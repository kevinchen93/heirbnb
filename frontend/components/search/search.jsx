import React from 'react';

import SearchResultsIndex from './search_results_index';
import SearchMap from './search_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rerender: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.removeListings();
      this.props.fetchListings();
    }
  }

  render(){
    if (!this.props.listings) {
      return <div></div>
    }

    const { listings, updateFilter } = this.props;

    return (
      <div className="search-index-container">
        <div className="search-results-and-map">
          <div className="search-results-section">
            <div>
              <SearchResultsIndex listings={this.props.listings} />
            </div>
          </div>

          <div className="map-container">
            <SearchMap
              listings={listings}
              updateFilter={updateFilter} />
          </div>
        </div>
      </div>
    );
  }

}

export default Search;
