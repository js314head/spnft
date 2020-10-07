import React, { Component, useState } from 'react';
import fire from './fire';
import './TransactionEntry.scss';

class TransactionEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: '' };
    this.state = { location: '' };
    this.state = { date: '' };
    this.state = { iznos: '' };
  }

  sendData = () => {
    const transakcija = {
      'Vrsta transakcije': this.state.sort,
      Lokacija: this.state.location,
      Datum: this.state.date,
      Iznos: this.state.iznos,
    };

    const transakcije = this.props.transactions;
    transakcije.push(transakcija);
    let userId = this.props.getUserId();
    const baseRef = fire.database().ref('users').child(`${userId}`);
    baseRef.update({
      Transakcije: transakcije,
    });
  };

  render() {
    return (
      <div className="TransactionEntry">
        <h1 className="TransactionEntry-headline">UNOS TRANSAKCIJE</h1>
        <form className="TransactionEntry-form">
          <div className="TransactionEntry-checkbox">
            <div className="TransactionEntry-sort">
              <p>Vrsta transakcije</p>
              <div className="flex">
                <label htmlFor="payment">
                  Uplata
                  <input
                    required
                    type="radio"
                    id="payment"
                    name="sortT"
                    value={this.state.sort}
                    onChange={(e) => this.setState({ sort: 'Uplata' })}
                  />
                </label>
                <label htmlFor="payout">
                  Isplata
                  <input
                    required
                    type="radio"
                    id="payout"
                    name="sortT"
                    value={this.state.sort}
                    onChange={(e) => this.setState({ sort: 'Isplata' })}
                  />
                </label>
              </div>
            </div>

            <div className="TransactionEntry-location">
              <p>Lokacija transakcije</p>
              <div className="flex">
                <label htmlFor="casino">
                  Casino
                  <input
                    required
                    type="radio"
                    id="casino"
                    name="sortL"
                    value={this.state.location}
                    onChange={(e) => this.setState({ location: 'Casino' })}
                  />
                </label>
                <label htmlFor="exchange">
                  Mjenjačnica
                  <input
                    required
                    type="radio"
                    id="exchange"
                    name="sortL"
                    value={this.state.location}
                    onChange={(e) => this.setState({ location: 'Mjenjačnica' })}
                  />
                </label>
                <label htmlFor="POS">
                  POS
                  <input
                    required
                    type="radio"
                    id="POS"
                    name="sortL"
                    value={this.state.location}
                    onChange={(e) => this.setState({ location: 'POS' })}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="TransactionEntry-rest">
            <label>
              Iznos transakcije
              <input
                required
                type="text"
                value={this.state.iznos}
                onChange={(e) => this.setState({ iznos: e.target.value })}
              ></input>
            </label>
            <label htmlFor="dateOfTransaction">
              Datum transakcije
              <input
                required
                type="date"
                id="dateOfTransaction"
                value={this.state.date}
                onChange={(e) => this.setState({ date: e.target.value })}
              />
            </label>

            <button
              className="TransactionEntry-btn entry"
              onClick={this.sendData}
            >
              Upiši transakciju!
            </button>
          </div>
        </form>
        <button
          className="TransactionEntry-btn"
          onClick={this.props.backToList}
        >
          Vrati se
        </button>
      </div>
    );
  }
}

export default TransactionEntry;
