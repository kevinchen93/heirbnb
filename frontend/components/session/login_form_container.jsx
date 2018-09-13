import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
        <Link to="/">Heirbnb</Link>
        <div>
          <p>Log in to continue</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Email Address"
              onChange={this.handleChange('email')}
              value={this.state.name_or_email} />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />
            <div>
              <button>Log in</button>
            </div>
          </form>

          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};
const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
  <button onClick={() => dispatch(openModal('signup'))}>
    Signup
  </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
