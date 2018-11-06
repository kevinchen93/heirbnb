import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';
import merge from 'lodash/merge';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.state = this.props.review;
  }

  componentDidMount() {
    debugger
  }

  update(field) {
    return (e) => {
      this.setState({ body: e.target.value });
    };
  }

  handleRatingChange(newRating) {
    this.setState({ rating: newRating });
  }

  handleCreateSubmit(e) {
    this.props.clearReviewErrors();
    e.preventDefault();
    const reviewData = merge({}, this.state);
    reviewData.booking_id = this.props.currentBooking.id;
    this.props.action(reviewData).then(this.props.closeModal);
  }

  handleEditSubmit(e) {
    debugger
    this.props.clearReviewErrors();
    e.preventDefault();
    this.props.action(this.state).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (!this.props.review) {
      return <div className="loading-text">Loading...</div>
    }

    return (
      <div>
        <svg id="close-x" onClick={this.props.closeModal} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "16px", width: "16px", display: "block", fill: "rgb(118, 118, 118)" }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
        <form className="review-form-container" onSubmit={this.props.formType === 'Submit Review' ? this.handleCreateSubmit : this.handleEditSubmit}>
          <div className="review-form-h1">Tell us about your trip</div>
          <div className="errors-div">
            {this.renderErrors()}
          </div>
          <label>
            <ReactStars
              value={ this.state.rating }
              count={5}
              size={20}
              edit={true}
              color2={'#008489'}
              onChange={ this.handleRatingChange } />
            <br />
          </label>

          <div>
            <textarea
              value={ this.state.body }
              onChange={this.update('body')}>
            </textarea>
          </div>

          <div className="review-buttons">
            <button className="listing-submit-button">{this.props.formType}</button>
            <button className="listing-submit-button" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
