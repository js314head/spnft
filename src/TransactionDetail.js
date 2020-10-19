import React, { Component } from 'react';
import fire from './fire';
import TransactionEntry from './TransactionEntry';
import TransactionInfo from './TransactionInfo';
import './TransactionDetail.scss';

class TransactionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { transakcije: '' };
    this.state = { users: '' };
  }

  componentDidMount() {
    const database = fire.database();
    const ref = database.ref('users/')
    ref.on('value', this.gotData, this.errData);
  }
  
  gotData = (data) => {
    let users = data.val()
    let keys = Object.keys(users)
    let userId = []
    for(let i = 0; i < keys.length; i++) {
      if(users[keys[i]].Ime === this.props.user) {
        userId.push(keys[i])
      }
    }
    this.setState({transakcije: users[userId[0]].Transakcije, users : users})
    
  };

  errData = (err) => {
    console.log(err);
  };

  render() {
    return (
      <div className="TransactionDetail">
        <TransactionEntry
          backToList={this.props.backToList}
          transactions={this.state.transakcije}
          users={this.state.users}
          user={this.props.user}
        />
        <TransactionInfo
          transactions={this.state.transakcije}
        />
      </div>
    );
  }
}

export default TransactionDetail;
