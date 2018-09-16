import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const review = {
    body: '',
    description: '',
    rating: ''
  };
  const formType = 'Create Review';

  return { review, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);