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
            <h2 className="login-modal-header">Log in to continue</h2>
            <div className="errors-div">
              {this.renderErrors()}
            </div>
            <div className='input-container'>
              <input
                type="text"
                placeholder="Email Address"
                onChange={this.handleChange('email')}
                value={this.state.email} />
              <div className="icon-container">
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block' }}>
                  <path d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z" fill-rule="evenodd">
                  </path>
                </svg>
              </div>
            </div>

            <div className='input-container'>
              <input
                type="password"
                placeholder="Password"
                onChange={this.handleChange('password')}
                value={this.state.password} />
              <div className="icon-container">
                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '16px', width: '16px', display: 'block' }}>
                  <path d="m19.5 9h-.5v-2a7 7 0 1 0 -14 0v2h-.5c-.78 0-1.5.72-1.5 1.5v12c0 .78.72 1.5 1.5 1.5h15c .78 0 1.5-.72 1.5-1.5v-12c0-.78-.72-1.5-1.5-1.5zm.5 13.5c0 .22-.28.5-.5.5h-15c-.22 0-.5-.28-.5-.5v-12c0-.22.28-.5.5-.5h1a .5.5 0 0 0 .5-.5v-2.5a6 6 0 1 1 12 0v2.5a.5.5 0 0 0 .5.5h1c .22 0 .5.28.5.5zm-8-10.5a3 3 0 0 0 -3 3c0 .83.36 1.59.94 2.15l-.9 2.16a.5.5 0 0 0 .46.69h5a .5.5 0 0 0 .46-.69l-.87-2.19c.56-.55.91-1.31.91-2.13a3 3 0 0 0 -3-3zm1.04 5.19.72 1.81h-3.51l.74-1.79a.5.5 0 0 0 -.17-.6 2 2 0 1 1 3.18-1.61c0 .64-.31 1.24-.8 1.6a.5.5 0 0 0 -.17.59zm-1.04-14.19a4 4 0 0 0 -4 4v2.5a.5.5 0 0 0 .5.5h7a .5.5 0 0 0 .5-.5v-2.5a4 4 0 0 0 -4-4zm3 6h-6v-2a3 3 0 1 1 6 0z" fillRule="evenodd">
                  </path>
                </svg>
              </div>
            </div>

            <div className="session-buttons">
              <button className="form-submit-button">Log in</button>
              <button type="button" id="demo-user-button" onClick={() => this.logInDemoUser()}>Log in as demo user</button>
            </div>

            <div className="separator-12"></div>

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
  closeModal: () => dispatch(closeModal()),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
