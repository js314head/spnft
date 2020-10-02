import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Legend from './Legend';
import ProfileMini from './ProfileMini';
import fire from './fire';
import './Customers.scss';
import { DesktopAccessDisabledTwoTone } from '@material-ui/icons';

class Customers extends Component {
  componentDidMount() {
    const database = fire.database();
    const ref = database.ref('users');
    ref.on('value', this.gotData, this.errData);
  }

  gotData = (data) => {
    console.log(data.val());
  };

  errData = (err) => {
    console.log(err);
  };

  render() {
    return (
      <div className="Customers">
        <SearchAndSort />
        <Legend />
        <div className="ProfileMini-box" data-simplebar>
          <ProfileMini />
          <ProfileMini />

          <ProfileMini />
        </div>
      </div>
    );
  }
}

export default Customers;
