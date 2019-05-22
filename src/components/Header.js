import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>Credenza</header>
    <nav>
      <NavLink activeClassName="is-active" to='/' exact={true} > Home </NavLink>~
      <NavLink activeClassName="is-active" to='/my-credenza'> My Credenza </NavLink>~
      <NavLink activeClassName="is-active" to='/about'> About </NavLink>
    </nav>
  </div>
)

export default Header
