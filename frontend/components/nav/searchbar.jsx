import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
  listings: Object.keys(state.entities.listings).map(id => state.entities.listings[id]),
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchListings: () => dispatch(fetchListings()),
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      lat: 40.715494,
      lng: -74.002209,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-icon-container">
          <i className="search-icon fa fa-search" aria-hidden="true"></i>
        </div>

        <div className="search-bar-wrapper">
          <input className="search-bar"
            type="search"
            maxLength="100"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder='Try "New York"' />
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
