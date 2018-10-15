import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/session_actions';
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
    this.changeModal = this.changeModal.bind(this);
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

  changeModal() {
    this.props.clearErrors();
    this.props.closeModal();
    this.props.otherForm();
  }

  signUpDemoUser() {
    const demoUser = {
      email: 'demo@demo',
      password: 'hunter12',
    };
    this.props.login(demoUser).then(this.props.closeModal);
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

  render () {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <button type="button" id="close-x" onClick={this.props.closeModal}>X</button>
            <button type="button" id="demo-user-button" onClick={() => this.signUpDemoUser()}>Log in as a demo user</button>
            <div className="errors-div">
              {this.renderErrors()}
            </div>
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
            <div className="form-submit-button">
              <button>Sign up</button>
            </div>
            <p className="modal-nav-link-text">Already have an Heirbnb account? <Link to={"/"} onClick={() => this.changeModal()}>Log in</Link></p>
          </form>
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
  login: user => dispatch(login(user)),
  processForm: user => dispatch(signup(user)),
  otherForm: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
