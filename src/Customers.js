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
    this.state = { displayLegend: true };
    this.state = { users: '' };
    this.state = { userKeys: [] };
    this.state = { userDetail: [] };
    this.state = { chosenUser: 0 };
    this.state = { page: 'normal' };
    this.state = { index: 0 };
    this.state = { transakcije: '' };
    this.state = { brojStr: 0 };
    this.state = { brojTra : 0 };
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
      let numOfUsers = 0;
      let numOfTransactions = 0;
      for (let i = 0; i < keys.length; i++) {
        userDetail.push(users[keys[i]]);
        numOfUsers += 1
        numOfTransactions += userDetail[i].BrojTransakcija;
      }
      this.setState({ users: users, userKeys: keys, userDetail: userDetail, displayLegend: true, brojStr : numOfUsers, brojTra : numOfTransactions });
    }
    
  };

  getUserId = () => {
    return this.state.userKeys[this.state.chosenUser];
  };

  errData = (err) => {
    console.log(err);
  };


  openDetailUser = (idx) => {
    this.setState({ page: 'detail', displayLegend: false });
    this.setState({ chosenUser: idx });
  };

  openTransactionUser = (idx) => {
    this.setState({ page: 'transaction', displayLegend: false });
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
            brojTransackija={this.state.userDetail[i].BrojTransakcija}
            datumTransakcije={this.state.userDetail[i].DatumTransakcije}
            uplate={this.state.userDetail[i].Uplate}
            isplate={this.state.userDetail[i].Isplate}
            transakcije={this.state.userDetail[i].Transakcije}
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
        <SearchAndSort className='Customers-ss' numOfTransactions={this.state.numOfUsers} numOfTransactions={this.state.numOfTransactions}/>
        {this.state.displayLegend ? <Legend className='Customers-l'/> : null}

        {!this.state.users ? <Spinner /> : this.renderData()}
      </div>
    );
  }
}

export default Customers;
