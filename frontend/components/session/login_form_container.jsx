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
    this.changeModal = this.changeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  changeModal() {
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
      email: 'demoUser@heirbeenbee.herokuapp.com',
      password: 'password',
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
            <button type="button" id="close-x" onClick={this.props.closeModal}>X</button>
            <button type="button" id="demo-user-button" onClick={() => this.logInDemoUser()}>Log in as demo user</button>
            <h2 className="login-modal-header">Log in to continue</h2>
            <div>
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
            {this.props.errors}
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
