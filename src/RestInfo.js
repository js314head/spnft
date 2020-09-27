import React from 'react';
import './RestInfo.scss';

const RestInfo = ({
  source,
  setSource,
  transaction,
  setTransaction,
  politics,
  setPolitics,
  suspisious,
  setSuspicious,
}) => {
  return (
    <div className="RestInfo">
      <p className="RestInfo-subtitle">Ostalo</p>

      <div className="RestInfo-container">
        <div className="RestInfo-source">
          <div className="checkbox-container">
            <p>Izvor informacija</p>
            <div className="options">
              <label htmlFor="SourceSpeak">
                Usmeno
                <input
                  type="radio"
                  id="SourceSpeak"
                  name="source"
                  source={source}
                  onChange={(e) =>
                    setSource(e.target.checked ? 'Usmeno' : null)
                  }
                />
              </label>
              <label htmlFor="SourceWrite">
                Pismeno
                <input
                  type="radio"
                  id="SourceWrite"
                  name="source"
                  source={source}
                  onChange={(e) =>
                    setSource(e.target.checked ? 'Pismeno' : null)
                  }
                />
              </label>
            </div>
          </div>
        </div>

        <div className="RestInfo-transaction">
          <div className="checkbox-container">
            <p>Transakcije u</p>
            <div className="options">
              <label htmlFor="TransactionCasino">
                Casino
                <input
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
        </div>

        <div className="RestInfo-politics">
          <div className="RestInfo-radio">
            <div className="checkbox-container">
              <p>Politički izložena osobna</p>
              <div className="options">
                <label htmlFor="PoliticianYes">
                  Da
                  <input
                    type="radio"
                    id="PoliticianYes"
                    name="politician"
                    value={politics}
                    onChange={(e) =>
                      setPolitics(e.target.checked ? 'Da' : null)
                    }
                  />
                </label>
                <label htmlFor="PoliticianNo">
                  Ne
                  <input
                    type="radio"
                    id="PoliticianNo"
                    name="politician"
                    value={politics}
                    onChange={(e) =>
                      setPolitics(e.target.checked ? 'Ne' : null)
                    }
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="RestInfo-suspicious">
          <div className="checkbox-container">
            <p>Stranka je sumnjiva osoba</p>
            <div className="options">
              <label htmlFor="SuspiciousYes">
                Da
                <input
                  type="radio"
                  id="SuspiciousYes"
                  name="suspicious"
                  value={suspisious}
                  onChange={(e) =>
                    setSuspicious(e.target.checked ? 'Da' : null)
                  }
                />
              </label>
              <label htmlFor="SuspiciousNo">
                Ne
                <input
                  type="radio"
                  id="SuspiciousNo"
                  name="suspicious"
                  value={suspisious}
                  onChange={(e) =>
                    setSuspicious(e.target.checked ? 'Ne' : null)
                  }
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestInfo;
