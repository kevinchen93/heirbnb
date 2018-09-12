import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './searchbar_container';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navBarHeader">
        <nav className="navBarContainer">
          <div className="navbar-logo">
            <Link to={"/"}>Logo</Link>
          </div>

          <div className="searchBarContainer">
            <SearchBarContainer />
          </div>

          <div>
            <ul className="nav-right">
              <li><Link to='/'>Become a host</Link></li>
              <li><Link to='/'>Earn credit</Link></li>
              <li><Link to={'/'}>Help</Link></li>
              <li><Link to={'/signup'}>Sign up</Link></li>
              <li><Link to='/login'>Log in</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
