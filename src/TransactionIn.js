import React, { Component } from 'react';
import MiniTransaction from './MiniTransaction';
import './TransactionIn.scss';

class TransactionIn extends Component {
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

  render() {
    return (
      <div className="TransactionIn" data-simplebar>
        <div className="TransactionIn-uplate" data-simplebar>
          <p className="TransactionIn-headline">UPLATE</p>
          <div className="TransactionIn-Legend">
            <p>DATUM</p>
            <p>IZNOS</p>
            <p>LOKACIJA</p>
          </div>
          {this.state.transactions ? this.renderUplate() : null}
        </div>
      </div>
    );
  }
}

export default TransactionIn;
