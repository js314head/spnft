import React, { useState, useEffect } from 'react';
import SearchAndSort from './SearchAndSort';
import Legend from './Legend';
import ProfileMini from './ProfileMini';
import './Customers.scss';

const Customers = () => {
  return (
    <div className="Customers">
      <SearchAndSort />
      <Legend />
      <ProfileMini />
      <ProfileMini />
      <ProfileMini />
      <ProfileMini />
      <ProfileMini />
      <ProfileMini />
      <ProfileMini />
      <ProfileMini />
    </div>
  );
};

export default Customers;
