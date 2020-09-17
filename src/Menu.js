import React, { useState, useEffect } from 'react';
import './Menu.scss';
import logo from './images/logo.png';
import Settings from './Settings';

const Menu = ({
  handleLogout,
  createCustomer,
  law,
  settings,
  importTransactions,
  page,
}) => {
  return (
    <div className="Menu">
      <img
        src={logo}
        className="Menu-logo"
        alt="spnft-logo"
        onClick={importTransactions}
      />
      <ul className="Menu-nav">
        <li className="Menu-navLink" onClick={importTransactions}>
          Unos transakcije
        </li>
        <li className="Menu-navLink" onClick={createCustomer}>
          Kreiranje stranke
        </li>
        <li className="Menu-navLink" onClick={law}>
          Zakon
        </li>
        <li className="Menu-navLink" onClick={settings}>
          Postavke
        </li>
      </ul>
      <button onClick={handleLogout} className="Menu-btn">
        Odjavi se
      </button>
    </div>
  );
};

export default Menu;
