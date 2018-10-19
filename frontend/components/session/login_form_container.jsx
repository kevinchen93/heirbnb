import React from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
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
    this.changeModal = this.changeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  changeModal() {
    this.props.clearSessionErrors();
    this.props.closeModal();
    this.props.otherForm();
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  logInDemoUser() {
    const demoUser = {
      email: 'demo@demo',
      password: 'hunter12',
    };
    this.props.processForm(demoUser).then(this.props.closeModal);
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
            <button type="button" id="demo-user-button" onClick={() => this.logInDemoUser()}>Log in as demo user</button>
            <h2 className="login-modal-header">Log in to continue</h2>
            <div className="errors-div">
              {this.renderErrors()}
            </div>
            <input
              type="text"
              placeholder="Email Address"
              onChange={this.handleChange('email')}
              value={this.state.email} />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChange('password')}
              value={this.state.password} />
            <div className="form-submit-button">
              <button>Log in</button>
            </div>
            <p className="modal-nav-link-text">Don't have an account? <Link to={"/"} onClick={() => this.changeModal()}>Sign up</Link></p>
          </form>
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
  processForm: user => dispatch(login(user)),
  otherForm: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
