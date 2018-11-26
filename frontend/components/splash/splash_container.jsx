import { connect } from 'react-redux';
import { fetchSplashListings } from '../../actions/listing_actions';
import Splash from './splash';

const mapStateToProps = state => {
  if (state.entities.splash) {
    return ({
      listings: state.entities.splash
    });
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => ({
  fetchSplashListings: locations => dispatch(fetchSplashListings(locations))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
