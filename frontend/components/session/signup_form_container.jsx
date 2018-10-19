import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
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
    this.props.clearSessionErrors();
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
            <svg id="close-x" onClick={this.props.closeModal} viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{ height: "16px", width: "16px", display: "block", fill: "rgb(118, 118, 118)" }}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
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
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
