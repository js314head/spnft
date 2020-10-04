import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Legend from './Legend';
import Spinner from './Spinner';
import ProfileMini from './ProfileMini';
import CustomerDetail from './CustomerDetail';
import fire from './fire';
import './Customers.scss';
import { DesktopAccessDisabledTwoTone } from '@material-ui/icons';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'detail' };
    this.state = { users: '' };
    this.state = { userKeys: [] };
  }

  componentDidMount() {
    const database = fire.database();
    const ref = database.ref('users');
    ref.on('value', this.gotData, this.errData);
  }

  gotData = (data) => {
    let users = data.val();
    let keys = Object.keys(users);
    this.setState({ users: users, userKeys: keys });
    console.log(keys);
  };

  errData = (err) => {
    console.log(err);
  };

  renderData = () => {
    let users = this.state.users;
    let keys = this.state.userKeys;
    let returned = [];
    for (let i = 0; i < keys.length; i++) {
      returned.push(
        <ProfileMini ime={users[keys[i]].Ime} oib={users[keys[i]].OIB} />
      );
    }
    return returned;
  };

  render() {
    return (
      <div className="Customers">
        <SearchAndSort />
        <Legend />
        {!this.state.users ? <Spinner /> : this.renderData()}
        <div className="Render-box" data-simplebar></div>
      </div>
    );
  }
}

export default Customers;
