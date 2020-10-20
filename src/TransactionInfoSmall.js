import React from 'react';
import TransactionIn from './TransactionIn';
import TransactionOut from './TransactionOut';
import './TransactionInfoSmall.scss';

const TransactionInfoSmall = ({ transactions }) => {
  return (
    <div className="TransactionInfoSmall">
      <TransactionIn transactions={transactions} />
      <TransactionOut transactions={transactions} />
    </div>
  );
};

export default TransactionInfoSmall;
