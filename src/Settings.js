import React from 'react';
import Menu from './Menu';
import './Home.scss';

const Settings = ({ handleLogout }) => {
  return (
    <div className="Home">
      <Menu handleLogout={handleLogout} />
      <Customers />
    </div>
  );
};

export default Settings;
