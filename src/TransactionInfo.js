import React, { Component } from 'react';
import fire from './fire';
import './TransactionInfo.scss';

class TransactionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { transakcije: [] };
  }

  // componentDidUpdate() {
  //   let transakcije = [];
  //   Object.keys(this.props.transactions).map((key) => {
  //     transakcije.push(this.props.transactions[key]);
  //   });
  //   this.setState({ transakcije: transakcije });
  // }

  render() {
    return <div className="TransactionInfo"></div>;
  }
}

export default TransactionInfo;
