import React, { useState } from 'react';
import Menu from './Menu';
import Customers from './Customers';
import createCustomer from './CreateCustomer';
import Law from './Law';
import Settings from './Settings';
import './Home.scss';
import CreateCustomer from './CreateCustomer';

const Home = ({ handleLogout }) => {
  const [page, setPage] = useState('home');

  const importTransactions = () => {
    setPage('home');
  };

  const createCustomer = () => {
    setPage('createCustomer');
  };

  const law = () => {
    setPage('law');
  };

  const settings = () => {
    setPage('settings');
  };

  return (
    <div className="Home">
      <Menu
        handleLogout={handleLogout}
        createCustomer={createCustomer}
        law={law}
        settings={settings}
        importTransactions={importTransactions}
      />
      {page === 'home' ? <Customers /> : null}
      {page === 'createCustomer' ? <CreateCustomer /> : null}
      {page === 'law' ? <Law /> : null}
      {page === 'settings' ? <Settings /> : null}
    </div>
  );
};

export default Home;
