import React, { useState, useEffect } from 'react';
import SearchAndSort from './SearchAndSort';
import './Customers.scss';

const Customers = () => {
  return (
    <div className="Customers">
      <SearchAndSort />
    </div>
  );
};

export default Customers;
