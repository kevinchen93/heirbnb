import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './searchbar_container';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navigation;
    if (this.props.currentUser) {
      navigation = (
        <div>
          <li>
            <div>
              <button>Become a host</button>
            </div>
          </li>
          <li>
            <div>
              <button>Saved</button>
            </div>
          </li>
          <li>
            <div>
              <button>Trips</button>
            </div>
          </li>
          <li>
            <div>
              <button>Credit</button>
            </div>
          </li>
          <li>
            <div>
              <button>Help</button>
            </div>
          </li>
          <li>
            <div>
              <button>{this.props.currentUser.first_name}</button>
              <ul>
                <li className="dropdown">
                  <button>Log Out</button>
                </li>
              </ul>
            </div>
          </li>
        </div>
      )
    } else {
      navigation = (
        <div>
          <li>
            <div>
              <button>Become a host</button>
            </div>
          </li>
          <li>
            <div>
              <button>Earn credit</button>
            </div>
          </li>
          <li>
            <div>
              <button>Help</button>
            </div>
          </li>
          <li>
            <div>
              <button onClick={() => this.props.openModal('signup')}>Sign up</button>
            </div>
          </li>
          <li>
            <div>
              <button onClick={() => this.props.openModal('login')}>Log in</button>
            </div>
          </li>
        </div>
      )
    }

    return (
      <header className="nav-bar-header">
        <nav className="nav-bar-container">
          <div className="nav-bar-left">
            <div className="nav-bar-logo">
                <div className="svg-container">
                  <a href="#">
                  <div className="hero-logo">
                  </div>
                </a>
                </div>
            </div>

            <SearchBarContainer />
          </div>

          <nav className="nav-bar-right">
            <ul>
              {navigation}
            </ul>

          </nav>
        </nav>
      </header>
    )
  }
}
