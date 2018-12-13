import React from 'react';
import { Link } from 'react-router-dom';

import LoadingDots from '../loading_dots';

import ListingIndex from '../listing/listing_index';
import SplashItems from './splash_items';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  componentDidMount() {
    this.props.fetchSplashListings(['New York', 'Chicago', 'Los Angeles', 'San Francisco']);
  }

  render() {
    if (this.state.loading || Object.values(this.props.listings).length === 0) {
      return <LoadingDots state={this.state} />
    } else {
      const nyListings = Object.values(this.props.listings['New York']).slice(0,4);
      const chicagoListings = Object.values(this.props.listings['Chicago']).slice(0,4);
      const laListings = Object.values(this.props.listings['Los Angeles']).slice(0,4);
      const sfListings = Object.values(this.props.listings['San Francisco']).slice(0,4);

      const cities = [
        <Link to="/search?lat=40.715494&lng=-74.005057"><SplashItems img={window.a} numHomes="400+" city="New York" description="Check out verified homes and design-minded spaces in a city where looking good is a way of life." /></Link>,
        <Link to="/search?lat=37.800168&lng=-122.418982"> <SplashItems img={window.d} numHomes="140+" city="Chicago" description="Explore Chicago's stunning architecture from the inside - in homes verified for quality and comfort." /></Link>,
        <Link to="/search?lat=34.065419&lng=-118.430828"><SplashItems img={window.b} numHomes="780+" city="Los Angeles" description="Find beachside bungalows, mid-century modern cottages, and more verified homes in the City of Angels." /></Link>,
        <Link to="/search?lat=37.800168&lng=-122.418982"> <SplashItems img={window.c} numHomes="150+" city="San Francisco" description="Discover Victorian flats, SoMa lofts, and more verified homes in a city where invention meets counterculture." /></Link>
      ]

      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i+1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

      const random3 = shuffle(cities).slice(0,3);

      return (
        <div className="splash-container">
          <div className="splash-locations">
            <div className="splash-header">
              <p className="splash-text">Explore the world</p>
            </div>

            <div className="splash-items-container">
              {random3}
            </div>
          </div>

          <ListingIndex listings={nyListings} city="New York" />
          <ListingIndex listings={chicagoListings} city="Chicago" />
          <ListingIndex listings={laListings} city="Los Angeles" />
          <ListingIndex listings={sfListings} city="San Francisco" />
        </div>
      )
    }
  }
}

export default SplashIndex;
