import React, { Component } from 'react';
import fire from './fire';
import MiniTransaction from './MiniTransaction';
import './TransactionInfoSmall.scss';

class TransactionInfoSmall extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ transactions: this.props.transactions });
    }, 500);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  renderUplate() {
    let uplate = [];
    this.state.transactions.map((item) =>
      item['Vrsta transakcije'] === 'Uplata'
        ? uplate.push(
            <MiniTransaction
              datum={item.Datum}
              iznos={this.numberWithCommas(item.Iznos)}
              lokacija={item.Lokacija}
            />
          )
        : null
    );

    return uplate;
  }

  renderIsplate() {
    let isplate = [];
    this.state.transactions.map((item) =>
      item['Vrsta transakcije'] === 'Isplata'
        ? isplate.push(
            <MiniTransaction
              datum={item.Datum}
              iznos={this.numberWithCommas(item.Iznos)}
              lokacija={item.Lokacija}
            />
          )
        : null
    );

    return isplate;
  }

  render() {
    return (
      <div
        className="TransactionInfoSmall"
        data-simplebar
        data-simplebar-auto-hide="false"
      >
        <div className="TransactionInfoSmall-uplate">
          <p className="TransactionInfoSmall-headline">UPLATE</p>
          <div className="TransactionInfoSmall-Legend">
            <p>DATUM</p>
            <p>IZNOS</p>
            <p>LOKACIJA</p>
          </div>
          {this.state.transactions ? this.renderUplate() : null}
        </div>
        <div className="TransactionInfoSmall-isplate">
          <p className="TransactionInfoSmall-headline">ISPLATE</p>
          <div className="TransactionInfoSmall-Legend">
            <p>DATUM</p>
            <p>IZNOS</p>
            <p>LOKACIJA</p>
          </div>
          {this.state.transactions ? this.renderIsplate() : null}
        </div>
      </div>
    );
  }
}

export default TransactionInfoSmall;
