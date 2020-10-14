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
    this.state = { sortBy : '' };
    
  }

  componentDidMount() {
    const database = fire.database();
    const ref = database.ref('users/')
    ref.on('value', this.gotData, this.errData);
  }

  gotData = (data) => {
    let users = data.val()
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

  setUserNum = () => {
   
      return this.state.numOfUsers
  }

  openDetailUser = (idx) => {
    this.setState({ page: 'detail', displayLegend: false });
    this.setState({ chosenUser: idx });
  };

  openTransactionUser = (idx) => {
    this.setState({ page: 'transaction', displayLegend: false });
    this.setState({ chosenUser: idx });
  };

  backToList = () => {
    this.setState({ page: 'normal', displayLegend : true });
  };

  setSort = () => {
    this.setState({sortBy : document.getElementById("Dropdown").value})
  }

  renderHeader = () => {
    return <SearchAndSort numOfUsers={this.state.brojStr} numOfTransactions={this.state.brojTra} sortiraj={this.setSort}/>
  }

  sortirajTransakcije(a,b) {
    const bandA = a.BrojTransakcija
    const bandB = b.BrojTransakcija
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  sortirajUplate(a,b) {
    const bandA = a.Uplate
    const bandB = b.Uplate
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  sortirajIsplate(a,b) {
    const bandA = a.Isplate
    const bandB = b.Isplate
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }

  sortirajDatumTransakcije(a,b) {
    console.log(a.DatumTransakcije);
    console.log(b.DatumTransakcije);


    const bandA = a.DatumTransakcije.replace(/-/g, "");
    const bandB = b.DatumTransakcije.replace(/-/g, "");
    let comparison = 0;
    if (bandA > bandB) {
      comparison = -1;
    } else if (bandA < bandB) {
      comparison = 1;
    }
    return comparison;
  }
  


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
      let items = this.state.userDetail
      if(this.state.sortBy === 'Transakcije') {items.sort(this.sortirajTransakcije)}
      if(this.state.sortBy === 'Uplate') {items.sort(this.sortirajUplate)}
      if(this.state.sortBy === 'Isplate') {items.sort(this.sortirajIsplate)}
      if(this.state.sortBy === 'PosljednjaTransakcija') {items.sort(this.sortirajDatumTransakcije)}
      
      for (let i = 0; i < this.state.userDetail.length; i++) {
        returned.push(
          <ProfileMini
            ime={items[i].Ime}
            oib={items[i].OIB}
            key={items[i].Ime}
            brojTransackija={items[i].BrojTransakcija}
            datumTransakcije={items[i].DatumTransakcije}
            uplate={items[i].Uplate}
            isplate={items[i].Isplate}
            transakcije={items[i].Transakcije}
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
        {!this.state.users ? null : this.renderHeader()}
        
        {this.state.displayLegend ? <Legend className='Customers-l'/> : null}

        {!this.state.users ? <Spinner /> : this.renderData()}
      </div>
    );
  }
}

export default Customers;
