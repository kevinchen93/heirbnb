import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
        <img className="search-icon" src="/assets/search-icon.svg" alt="search"></img>

        <input className="search-bar"
          type="search"
          maxLength="100"
          value={this.state.body}
          onChange={this.handleChange}
          placeholder='Try "New York"' />
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(SearchBar);
