import React from 'react';
import './RestInfo.scss';

const RestInfo = ({
  transaction,
  setTransaction,
  politics,
  setPolitics,
  suspisious,
  setSuspicious,
}) => {
  return (
    <div className="RestInfo">
      <div className="RestInfo-container">
        <div className="RestInfo-transaction">
          <p className="RestInfo-subtitle">Transakcija izvršena u</p>
          <div className="options">
            <label htmlFor="TransactionCasino">
              Casino
              <input
                required
                type="radio"
                id="TransactionCasino"
                name="transaction"
                value={transaction}
                onChange={(e) =>
                  setTransaction(e.target.checked ? 'Casino' : null)
                }
              />
            </label>
            <label htmlFor="TransactionChange">
              Mjenjačnica
              <input
                required
                type="radio"
                id="TransactionChange"
                name="transaction"
                value={transaction}
                onChange={(e) =>
                  setTransaction(e.target.checked ? 'Mjenjačnica' : null)
                }
              />
            </label>
            <label htmlFor="TransactionPOS">
              POS
              <input
                required
                type="radio"
                id="TransactionPOS"
                name="transaction"
                value={transaction}
                onChange={(e) =>
                  setTransaction(e.target.checked ? 'POS' : null)
                }
              />
            </label>
          </div>
        </div>

        <div className="RestInfo-politics">
          <p>Politički izložena osobna</p>
          <div className="options">
            <label htmlFor="PoliticianYes">
              Da
              <input
                required
                type="radio"
                id="PoliticianYes"
                name="politician"
                value={politics}
                onChange={(e) => setPolitics(e.target.checked ? 'Da' : null)}
              />
            </label>
            <label htmlFor="PoliticianNo">
              Ne
              <input
                required
                type="radio"
                id="PoliticianNo"
                name="politician"
                value={politics}
                onChange={(e) => setPolitics(e.target.checked ? 'Ne' : null)}
              />
            </label>
          </div>
        </div>

        <div className="RestInfo-suspicious">
          <p>Stranka je sumnjiva osoba</p>
          <div className="options">
            <label htmlFor="SuspiciousYes">
              Da
              <input
                required
                type="radio"
                id="SuspiciousYes"
                name="suspicious"
                value={suspisious}
                onChange={(e) => setSuspicious(e.target.checked ? 'Da' : null)}
              />
            </label>
            <label htmlFor="SuspiciousNo">
              Ne
              <input
                required
                type="radio"
                id="SuspiciousNo"
                name="suspicious"
                value={suspisious}
                onChange={(e) => setSuspicious(e.target.checked ? 'Ne' : null)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestInfo;
