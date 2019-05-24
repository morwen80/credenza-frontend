import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>Credenza</header>
    <nav>
      <NavLink activeClassName="is-active" to='/' exact={true} > your Credenza </NavLink>|
      <NavLink activeClassName="is-active" to='/faves'> favourites </NavLink>|
      <NavLink activeClassName="is-active" to='/about'> about </NavLink>
    </nav>
  </div>
)

export default Header
