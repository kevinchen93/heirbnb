import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render () {
    return (
      <div>
        <Link to="/">Heirbnb</Link>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={this.handleChange('email')}
              value={this.state.email} />
            <input
              type="text"
              placeholder="First name"
              onChange={this.handleChange('firstName')}
              value={this.state.firstName} />
            <input
              type="text"
              placeholder="Last name"
              onChange={this.handleChange('lastName')}
              value={this.state.lastName} />
            <input
              type="password"
              placeholder="Create a Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />
            <div>
              <button>Sign up</button>
            </div>
          </form>

          <p>Already have an Heirbnb account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToProps)(SignupForm);
