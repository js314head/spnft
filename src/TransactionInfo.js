import { ThreeSixtySharp } from '@material-ui/icons';
import React, { Component } from 'react';
import MiniTransaction from './MiniTransaction';
import './TransactionInfo.scss';

class TransactionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { transakcije: [] };
  }

  // componentDidUpdate() {
  //   let returned = []
  //   this.props.transactions.forEach((element) => {
  //     returned.push(<MiniTransaction />);
  //   });
  //   this.setState({transakcije : returned})
  // }

  

  render() {
    return <div className="TransactionInfo">{this.state.transakcije}</div>;
  }
}

export default TransactionInfo;
