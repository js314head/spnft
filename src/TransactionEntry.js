import React, { Component} from 'react';
import fire from './fire';
import './TransactionEntry.scss';

class TransactionEntry extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: '' };
    this.state = { location: '' };
    this.state = { date: '' };
    this.state = { iznos: 0 };
  }

  sendData = () => {
    const transakcija = {
      'Vrsta transakcije': this.state.sort,
      Lokacija: this.state.location,
      Datum: this.state.date,
      Iznos: this.state.iznos,
    };
    let uplate = Number(this.props.user.Uplate) + Number(this.state.iznos)
    let isplate = Number(this.props.user.Isplate) + Number(this.state.iznos)
    let brojTransakcija = Number(this.props.user.BrojTransakcija) + 1

    const transakcije = this.props.transactions;
    transakcije.push(transakcija);
    let userId = this.props.getUserId();
    const baseRef = fire.database().ref('users').child(`${userId}`);
    if(this.state.sort === 'Uplata') {
      baseRef.update({
        Transakcije: transakcije,
        Uplate: uplate,
        BrojTransakcija: brojTransakcija,
        DatumIsplate : this.state.date
      });
    } else {
      baseRef.update({
        Transakcije: transakcije,
        Isplate: isplate,
        BrojTransakcija: brojTransakcija,
        DatumTransakcije : this.state.date
      });
    }
  };

  render() {
    return (
      <div className="TransactionEntry">
        <form className="TransactionEntry-form" onSubmit={this.sendData}>
          <label>
            Iznos transakcije
            <input
            min="1"
              autoFocus
              required
              type="number"
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

          <div className="TransactionEntry-flex">
            <p>Vrsta transakcije</p>
            <div className="TransactionEntry-checkbox">
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

          <div className="TransactionEntry-flex">
            <p>Lokacija transakcije</p>
            <div className="TransactionEntry-checkbox">
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

          <button className="TransactionEntry-btn">
            Upiši transakciju!
          </button>
        </form>
      </div>
    );
  }
}

export default TransactionEntry;
