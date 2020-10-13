import React, { Component } from 'react';
import './ProfileMini.scss';

class ProfileMini extends Component{
  


  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
   
    	
    return (
      <div className="ProfileMini">
        <ul className="ProfileMini-list">
          <li className="bold name">{this.props.ime}</li>
          <li>{this.props.oib}</li>
    <li className="bold hide">{this.props.brojTransackija}</li>
          <li className="hide">{this.numberWithCommas(this.props.uplate)}</li>
          <li className="hide">{this.numberWithCommas(this.props.isplate)}</li>
          <li className="hide">{this.props.datumTransakcije}</li>
          <button
            className="ProfileMini-btn"
            onClick={() => this.props.openTransactionUser(this.props.index)}
          >
            Upiši transakciju
          </button>
          <button
            className="ProfileMini-btn"
            onClick={() => this.props.openDetailUser(this.props.index)}
          >
            Detalji stranke
          </button>
        </ul>
      </div>
    );
  }
};

export default ProfileMini;
