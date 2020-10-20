import React, { Component } from 'react';
import MiniTransaction from './MiniTransaction';
import './TransactionOut.scss';

class TransactionOut extends Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [] };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ transactions: this.props.transactions });
    }, 100);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
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
      <div className="TransactionOut" data-simplebar>
        <div className="TransactionOut-isplate" data-simplebar>
          <p className="TransactionOut-headline">ISPLATE</p>
          <div className="TransactionOut-Legend">
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

export default TransactionOut;
