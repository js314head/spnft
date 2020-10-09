import React from 'react';
import FullInfo from './FullInfo';
import TransactionInfo from './TransactionInfo';
import './CustomerDetail.scss';

const CustomerDetail = ({ user, backToList, getUserId }) => {
 
  return (
    <div className="CustomerDetail">
      <FullInfo user={user} backToList={backToList} />
      <TransactionInfo />
    </div>
  );
};

export default CustomerDetail;
