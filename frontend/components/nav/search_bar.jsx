import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };

    this.setAddress = this.setAddress.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementsByClassName("main-search-bar")[0];
    const autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addDomListener(window, "load", autocomplete);
    let address;
    autocomplete.addListener("place_changed", () => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        this.setState({ address });
        this.handleSubmit();
      } else {
        address = autocomplete.getPlace().formatted_address;
        this.setState({ address });
        this.handleSubmit();
      }
    });
  }

  setAddress(address) {
    this.setState({ address });
  }

  handleInput(e) {
    this.setState({ address: e.currentTarget.value });
  }

  handleSubmit(e) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.state.address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        this.props.history.push(`/search?lat=${lat}&lng=${lng}`);
      } else {
        this.props.history.push(`/search?lat=40.715494&lng=-74.005057`);
      }
    });
  }


  render() {
    const cities = ['New York', 'Chicago', 'Los Angeles', 'San Francisco'];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <i className="fas fa-search"></i>
          <input
            className="main-search-bar"
            type="text"
            value={this.state.address}
            placeholder={`Try "${randomCity}"`}
            onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
