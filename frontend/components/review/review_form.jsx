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
          <svg id="close-x" onClick={this.props.closeModal} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "16px", width: "16px", display: "block", fill: "rgb(118, 118, 118)" }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
          <div className="review-form-h1">Tell us about your trip</div>
          <label>
            <ReactStars
              value={ this.state.rating }
              count={5}
              size={20}
              edit={true}
              color2={'#008489'}
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
