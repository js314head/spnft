import React, { Component } from 'react';
import FullInfo from './FullInfo';
import TransactionInfo from './TransactionInfo';
import './CustomerDetail.scss';

const CustomerDetail = ({ user }) => {
  return (
    <div className="CustomerDetail">
      <FullInfo user={user} />
      <TransactionInfo />
    </div>
  );
};

export default CustomerDetail;
