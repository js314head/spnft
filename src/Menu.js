import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './Menu.scss';
import logo from './images/logo.png';

const Menu = ({ handleLogout }) => {
  return (
    <div className="Menu">
      <img src={logo} className="Menu-logo" alt="spnft-logo" />
      <nav className="Menu-nav">
        <NavLink to="/" className="navLink">
          Unos transakcije
        </NavLink>
        <NavLink to="/stranke" className="navLink">
          Kreiranje stranke
        </NavLink>
        <NavLink to="/zakon" className="navLink">
          Zakon
        </NavLink>
        <NavLink to="/postavke" className="navLink">
          Postavke
        </NavLink>
      </nav>
      <button onClick={handleLogout} className="Menu-btn">
        Odjavi se
      </button>
    </div>
  );
};

export default Menu;
