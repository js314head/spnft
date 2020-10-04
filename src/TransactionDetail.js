import React from 'react';
import TransactionEntry from './TransactionEntry';
import TransactionInfo from './TransactionInfo';
import './TransactionDetail.scss';

const TransactionDetail = ({ user, backToList }) => {
  return (
    <div className="TransactionDetail">
      <TransactionEntry backToList={backToList} />
      <TransactionInfo user={user} />
    </div>
  );
};

export default TransactionDetail;
