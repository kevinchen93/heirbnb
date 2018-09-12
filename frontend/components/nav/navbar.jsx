import React from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link to={"/"}>
          <h2>Logo</h2>
        </Link>

        <h2>Search bar</h2>
        <h2>Become a host</h2>
        <h2>Earn credit</h2>
        <h2>Help</h2>
        <h2>Sign up</h2>
        <h2>Log in</h2>
      </header>
    )
  }
}
