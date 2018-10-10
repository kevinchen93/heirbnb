import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  // maybe change line 19 

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Body
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('body')} />
          </label>

          <label>Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <label>Rating
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('rating')} />
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
