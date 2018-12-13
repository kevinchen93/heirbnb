import { connect } from 'react-redux';

import { fetchSplashListings } from '../../actions/listing_actions';
import SplashIndex from './splash_index';

const mapStateToProps = state => {
  if (state.entities.splashListings) {
    return ({
      listings: state.entities.splashListings
    });
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => ({
  fetchSplashListings: locations => dispatch(fetchSplashListings(locations))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashIndex);
