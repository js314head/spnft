import React, { useState } from 'react';
import Menu from './Menu';
import Customers from './Customers';
import CreateCustomer from './CreateCustomer';
import Links from './Links';
import './Home.scss';

const Home = ({ handleLogout, user }) => {
  const [page, setPage] = useState('home');

  const importTransactions = () => {
    setPage('home');
  };

  const createCustomer = () => {
    setPage('createCustomer');
  };

  const links = () => {
    setPage('links');
  };

  return (
    <div className="Home">
      <Menu
        handleLogout={handleLogout}
        createCustomer={createCustomer}
        links={links}
        importTransactions={importTransactions}
        page={page}
        user={user}
      />
      {page === 'home' ? <Customers /> : null}
      {page === 'createCustomer' ? <CreateCustomer /> : null}
      {page === 'links' ? <Links /> : null}
    </div>
  );
};

export default Home;
