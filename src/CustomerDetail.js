import React, { Component} from 'react';
import fire from './fire';
import FullInfo from './FullInfo';
import TransactionInfoSmall from './TransactionInfoSmall';
import './CustomerDetail.scss';

class CustomerDetail extends Component{
  constructor(props) {
    super(props);
    this.state = { transakcije: '' };
  }

  componentDidMount() {
    let userId = this.props.getUserId();
    const baseRef = fire.database().ref('users').child(`${userId}`);
    baseRef.on('value', this.gotData, this.errData);
  }

  gotData = (data) => {
    const user = data.val();
    let transakcije = user.Transakcije;
    if (transakcije === undefined) {
      transakcije = [];
    }
    this.setState({ transakcije: transakcije });
  };

  errData = (err) => {
    console.log(err);
  };

 
  render() {

    return (
      <div className="CustomerDetail">
        <FullInfo user={this.props.user} backToList={this.props.backToList} />
        <TransactionInfoSmall
          user={this.props.user}
          getUserId={this.props.getUserId}
          transactions={this.state.transakcije}
        />
      </div>
    );
  }
};

export default CustomerDetail;
