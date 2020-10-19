import React, { Component } from 'react';
import fire from './fire';
import FullInfo from './FullInfo';
import TransactionInfoSmall from './TransactionInfoSmall';
import './CustomerDetail.scss';

class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { transakcije: '' };
    this.state = { userInfo: '' };
  }

  componentDidMount() {
    const database = fire.database();
    const ref = database.ref('users/');
    ref.on('value', this.gotData, this.errData);
  }

  gotData = (data) => {
    let users = data.val();
    let keys = Object.keys(users);
    let userId = [];
    for (let i = 0; i < keys.length; i++) {
      if (users[keys[i]].Ime === this.props.user) {
        userId.push(keys[i]);
      }
    }
    this.setState({
      transakcije: users[userId[0]].Transakcije,
      userInfo: users[userId[0]],
    });
  };

  errData = (err) => {
    console.log(err);
  };

  render() {
    return (
      <div className="CustomerDetail">
        <FullInfo
          userInfo={this.state.userInfo}
          backToList={this.props.backToList}
        />
        <TransactionInfoSmall transactions={this.state.transakcije} />
      </div>
    );
  }
}

export default CustomerDetail;
