import React, { useState } from 'react';
import Menu from './Menu';
import Customers from './Customers';
import createCustomer from './CreateCustomer';
import Law from './Law';
import Links from './Links';
import Settings from './Settings';
import './Home.scss';
import CreateCustomer from './CreateCustomer';

const Home = ({ handleLogout, user }) => {
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
  const links = () => {
    setPage('links');
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
        links={links}
        settings={settings}
        importTransactions={importTransactions}
        page={page}
        user={user}
      />
      {page === 'home' ? <Customers /> : null}
      {page === 'createCustomer' ? <CreateCustomer /> : null}
      {page === 'law' ? <Law /> : null}
      {page === 'links' ? <Links /> : null}
      {page === 'settings' ? <Settings /> : null}
    </div>
  );
};

export default Home;
