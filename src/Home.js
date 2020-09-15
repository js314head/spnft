import React from 'react';
import Menu from './Menu';
import Customers from './Customers';
import './Home.scss';

const Home = ({ handleLogout }) => {
  return (
    <div className="Home">
      <Menu handleLogout={handleLogout} />
      <Customers />
    </div>
  );
};

export default Home;
