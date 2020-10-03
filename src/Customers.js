import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Legend from './Legend';
import Spinner from './Spinner';
import ProfileMini from './ProfileMini';
import CustomerDetail from './CustomerDetail';
import fire from './fire';
import './Customers.scss';
import { DesktopAccessDisabledTwoTone } from '@material-ui/icons';

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
    console.log(this.state.users);
    console.log(this.state.userKeys);
  };

  errData = (err) => {
    console.log(err);
  };

  renderData = () => {
    return <Spinner />;
  };

  render() {
    return (
      <div className="Customers">
        <SearchAndSort />
        {/* <Legend /> */}
        {this.renderData()}
        <div className="Render-box" data-simplebar></div>
      </div>
    );
  }
}

export default Customers;
