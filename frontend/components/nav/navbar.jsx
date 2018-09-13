import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './searchbar_container';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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

            </ul>

          </nav>
        </nav>
      </header>
    )
  }
}
