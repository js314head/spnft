import React from 'react';
import logo from './images/logo.png';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './Menu.scss';

const Menu = ({
  handleLogout,
  createCustomer,
  law,
  links,
  settings,
  importTransactions,
  user,
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
        <li className="Menu-navLink" onClick={links}>
          Linkovi
        </li>
        <li className="Menu-navLink" onClick={settings}>
          Postavke
        </li>
      </ul>
      <div className="Menu-logout">
        <p className="Menu-user">
          <span>
            <AccountBoxIcon className="svg" />
          </span>
          {user}
        </p>
        <button onClick={handleLogout} className="Menu-logout-btn">
          Odjavi se
        </button>
      </div>
    </div>
  );
};

export default Menu;
