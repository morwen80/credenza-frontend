import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>Credenza</header>
    <nav>
      <NavLink activeClassName="is-active" to='/' exact={true} > <i className="fas fa-home"></i> </NavLink>
      <NavLink activeClassName="is-active" to='/faves'> faves </NavLink> |
      <NavLink activeClassName="is-active" to='/about'> about </NavLink>
    </nav>
  </div>
)

export default Header
