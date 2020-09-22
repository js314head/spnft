import React from 'react';
import './DeepAnalysis.scss';

const DeepAnalysis = () => {
  return (
    <div className="DeepAnalysis">
      <div className="DeepAnalysis-basic">
        <p className="DeepAnalysis-subtitle">Osnovni podaci</p>
        <label htmlFor="name">
          Ime i prezime
          <input type="text" id="name" />
        </label>
        <label htmlFor="adress">
          Prebivalište
          <input type="text" id="adress" />
        </label>
        <label htmlFor="dateOfBirth">
          Datum rođenja
          <input type="text" id="dateOfBirth" />
        </label>
        <label htmlFor="oib">
          OIB
          <input type="text" id="oib" />
        </label>
      </div>

      <div className="DeepAnalysis-id">
        <div className="DeepAnalysis-idType">
          <p className="DeepAnalysis-subtitle">Identifikacijska isprava</p>
          <label htmlFor="osobna">
            Osobna
            <input type="radio" id="osobna" name="id" />
          </label>
          <label htmlFor="putovnica">
            Putovnica
            <input type="radio" id="putovnica" name="id" />
          </label>
          <label htmlFor="vozačka">
            Vozačka
            <input type="radio" id="vozačka" name="id" />
          </label>
        </div>

        <label htmlFor="brojDokumenta">
          Broj isprave i izdavatelj
          <input type="text" id="brojDokumenta" />
        </label>
        <label htmlFor="državaDokumenta">
          Država izdavatelja
          <input type="text" id="državaDokumenta" />
        </label>
        <label htmlFor="citizenship">
          Državljanstvo
          <input type="text" id="citizenship" />
        </label>
      </div>

      <div className="DeepAnalysis-rest">
        <p className="DeepAnalysis-subtitle">Ostalo</p>

        <div className="DeepAnalysis-rest-source">
          <div className="checkbox-container">
            <p>Izvor informacija :</p>
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

        <div className="DeepAnalysis-rest-transaction">
          <div className="checkbox-container">
            <p>Transakcije u :</p>
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

        <div className="DeepAnalysis-rest-politics">
          <div className="DeepAnalysis-radio">
            <div className="checkbox-container">
              <p>Politički izložena osobna :</p>
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

        <div className="DeepAnalysis-rest-suspicious">
          <div className="checkbox-container">
            <p>Stranka je sumnjiva osoba :</p>
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
      <div className="DeepAnalysis-remark">
        <textarea placeholder="Napomena" />
        <button className="DeepAnalysis-remark-btn">Kreiraj stranku</button>
      </div>
    </div>
  );
};
//dATUM I VRIJEME POVUĆI
export default DeepAnalysis;
