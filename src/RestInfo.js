import React from 'react';
import './RestInfo.scss';

const RestInfo = () => {
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
                <input type="radio" id="SourceSpeak" name="source" />
              </label>
              <label htmlFor="SourceWrite">
                Pismeno
                <input type="radio" id="SourceWrite" name="source" />
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
                <input type="radio" id="TransactionCasino" name="transaction" />
              </label>
              <label htmlFor="TransactionChange">
                Mjenjačnica
                <input type="radio" id="TransactionChange" name="transaction" />
              </label>
              <label htmlFor="TransactionPOS">
                POS
                <input type="radio" id="TransactionPOS" name="transaction" />
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
                  <input type="radio" id="PoliticianYes" name="politician" />
                </label>
                <label htmlFor="PoliticianNo">
                  Ne
                  <input type="radio" id="PoliticianNo" name="politician" />
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
                <input type="radio" id="SuspiciousYes" name="suspicious" />
              </label>
              <label htmlFor="SuspiciousNo">
                Ne
                <input type="radio" id="SuspiciousNo" name="suspicious" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestInfo;
