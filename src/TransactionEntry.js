import React, { useState } from 'react';
import './TransactionEntry.scss';

const TransactionEntry = ({ backToList }) => {
  const [sort, setSort] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

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
                  value={sort}
                  onChange={(e) => setSort(e.target.checked ? 'Uplata' : null)}
                />
              </label>
              <label htmlFor="payout">
                Isplata
                <input
                  required
                  type="radio"
                  id="payout"
                  name="sortT"
                  value={sort}
                  onChange={(e) => setSort(e.target.checked ? 'Uplata' : null)}
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
                  name="sortT"
                  value={sort}
                  onChange={(e) =>
                    setLocation(e.target.checked ? 'Uplata' : null)
                  }
                />
              </label>
              <label htmlFor="exchange">
                Mjenjačnica
                <input
                  required
                  type="radio"
                  id="exchange"
                  name="sortT"
                  value={sort}
                  onChange={(e) =>
                    setLocation(e.target.checked ? 'Uplata' : null)
                  }
                />
              </label>
              <label htmlFor="POS">
                POS
                <input
                  required
                  type="radio"
                  id="POS"
                  name="sortT"
                  value={sort}
                  onChange={(e) =>
                    setLocation(e.target.checked ? 'Uplata' : null)
                  }
                />
              </label>
            </div>
          </div>
        </div>

        <div className="TransactionEntry-amount">
          <label>
            Iznos transackije
            <input type="text"></input>
          </label>

          <label htmlFor="dateOfTransaction">
            Datum transackije
            <input
              required
              type="date"
              id="dateOfTransaction"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <button>Upiši transakciju!</button>
      </form>
      <button className="TransactionEntry-btn" onClick={backToList}>
        Vrati se
      </button>
    </div>
  );
};

export default TransactionEntry;
