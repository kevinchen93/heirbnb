import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';
import merge from 'lodash/merge';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleRatingChange(newRating) {
    this.setState({ 'rating': newRating });
  }

  handleSubmit(e) {
    e.preventDefault();
    const reviewData = merge({}, this.state);
    reviewData.booking_id = this.props.currentBooking.id;
    this.props.action(reviewData).then(this.props.closeModal);
  }

  render() {
    return (
      <div>
        <form className="review-form-container" onSubmit={this.handleSubmit}>

          <label>
            <ReactStars
              value={ this.state.rating }
              count={5}
              size={24}
              edit={true}
              color2={'#ffd700'}
              onChange={this.handleRatingChange} />
            <br />
          </label>

          <div>
            <br />
            <textarea
              value={this.state.body}
              onChange={this.update('body')}>
            </textarea>
          </div>

          <button className="listing-submit-button">{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
