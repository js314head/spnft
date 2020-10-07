import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Legend from './Legend';
import Spinner from './Spinner';
import ProfileMini from './ProfileMini';
import CustomerDetail from './CustomerDetail';
import TransactionDetail from './TransactionDetail';
import fire from './fire';
import './Customers.scss';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
    this.state = { userKeys: [] };
    this.state = { userDetail: [] };
    this.state = { chosenUser: 0 };
    this.state = { page: 'normal' };
    this.state = { index: 0 };
  }

  componentDidMount() {
    const database = fire.database();
    const ref = database.ref('users');
    ref.on('value', this.gotData, this.errData);
  }

  gotData = (data) => {
    let users = data.val();
    if (users !== null) {
      let keys = Object.keys(users);
      let userDetail = [];
      for (let i = 0; i < keys.length; i++) {
        userDetail.push(users[keys[i]]);
      }
      this.setState({ users: users, userKeys: keys, userDetail: userDetail });
    }
  };

  getUserId = () => {
    return this.state.userKeys[this.state.chosenUser];
  };

  errData = (err) => {
    console.log(err);
  };

  openDetailUser = (idx) => {
    this.setState({ page: 'detail' });
    this.setState({ chosenUser: idx });
  };

  openTransactionUser = (idx) => {
    this.setState({ page: 'transaction' });
    this.setState({ chosenUser: idx });
  };

  backToList = () => {
    this.setState({ page: 'normal' });
  };

  renderData = () => {
    if (this.state.page === 'detail') {
      return (
        <CustomerDetail
          user={this.state.userDetail[this.state.chosenUser]}
          backToList={this.backToList}
          getUserId={this.getUserId}
        />
      );
    } else if (this.state.page === 'transaction') {
      return (
        <TransactionDetail
          user={this.state.userDetail[this.state.chosenUser]}
          backToList={this.backToList}
          getUserId={this.getUserId}
        />
      );
    } else {
      let returned = [];
      for (let i = 0; i < this.state.userDetail.length; i++) {
        returned.push(
          <ProfileMini
            ime={this.state.userDetail[i].Ime}
            oib={this.state.userDetail[i].OIB}
            key={this.state.userDetail[i].Ime}
            index={i}
            openDetailUser={this.openDetailUser}
            openTransactionUser={this.openTransactionUser}
            getUserId={this.getUserId}
          />
        );
      }
      return returned;
    }
  };

  render() {
    return (
      <div className="Customers">
        <SearchAndSort />
        <Legend />

        {!this.state.users ? <Spinner /> : this.renderData()}
      </div>
    );
  }
}

export default Customers;
