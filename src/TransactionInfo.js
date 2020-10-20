import React from 'react';
import TransactionIn from './TransactionIn';
import TransactionOut from './TransactionOut';
import './TransactionInfo.scss';

const TransactionInfo = ({ transactions }) => {
  return (
    <div className="TransactionInfo">
      <TransactionIn transactions={transactions} />
      <TransactionOut transactions={transactions} />
    </div>
  );
};

export default TransactionInfo;
