import React from 'react';
import LoadingDots from '../loading_dots';
import LandingNav from '../navbar/landing_nav';
import LandingSearchBar from '../navbar/landing_search_bar';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true;
    }

    setTimeout(() => this.setState({ loading: false }), 1000);
  }

  render() {
    if (this.state.loading) {
      return <LoadingDots state={this.state} />;
    } else {
      return (
        <div className="landing-container">
          <LandingNav />
          <div id="landing-search-container">
            <LandingSearchBar />
          </div>
        </div>
      )
    }
  }
}

export default Landing;
