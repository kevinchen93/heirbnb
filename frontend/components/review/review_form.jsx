import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactStars from 'react-stars';

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
    this.props.action(this.state).then(() => this.props.closeModal);
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
