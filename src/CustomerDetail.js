import React, { Component } from 'react';
import FullInfo from './FullInfo';
import TransactionInfo from './TransactionInfo';
import './CustomerDetail.scss';

class CustomerDetail extends Component {
  render() {
    return (
      <div className="CustomerDetail">
        <FullInfo />
        <TransactionInfo />
      </div>
    );
  }
}

export default CustomerDetail;
