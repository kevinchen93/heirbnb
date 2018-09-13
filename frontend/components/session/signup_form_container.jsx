import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  render () {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <button type="button" id="close-x" onClick={this.props.closeModal}>X</button>
            <input
              type="email"
              placeholder="Email address"
              onChange={this.handleChange('email')}
              value={this.state.email} />
            <br />
            <input
              type="text"
              placeholder="First name"
              onChange={this.handleChange('first_name')}
              value={this.state.firstName} />
            <br />
            <input
              type="text"
              placeholder="Last name"
              onChange={this.handleChange('last_name')}
              value={this.state.lastName} />
            <br />
            <input
              type="password"
              placeholder="Create a Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />
            <br />
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

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  otherForm: (
  <button onClick={() => dispatch(openModal('signup'))}>
    Signup
  </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(SignupForm);
