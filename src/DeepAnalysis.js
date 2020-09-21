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
        <label htmlFor="oib">
          OIB
          <input type="text" id="oib" />
        </label>
        <label htmlFor="brojDokumenta">
          Broj isprave i izdavatelj
          <input type="text" id="brojDokumenta" />
        </label>
        <label htmlFor="državaDokumenta">
          Država izdavatelja
          <input type="text" id="državaDokumenta" />
        </label>
      </div>

      <div className="DeepAnalysis-rest">
        <p className="DeepAnalysis-subtitle">Ostalo</p>
        <label htmlFor="citizenship">
          Državljanstvo
          <input type="text" id="citizenship" />
        </label>
        <div className="DeepAnalysis-rest-politics">
          <div className="DeepAnalysis-radio">
            <p>Politički izložena osobna</p>
            <label htmlFor="PoliticianYes">
              Da
              <input type="radio" id="PoliticianYes" />
            </label>
            <label htmlFor="PoliticianNo">
              Ne
              <input type="radio" id="PoliticianNo" />
            </label>
          </div>
        </div>
        <div className="DeepAnalysis-rest-source">
          <p>Izvor informacija</p>
          <label htmlFor="SourceSpeak">
            Usmena izjava
            <input type="radio" id="SourceSpeak" />
          </label>
          <label htmlFor="SourceWrite">
            Pisana izjava
            <input type="radio" id="SourceWrite" />
          </label>
        </div>

        <div className="DeepAnalysis-rest-transaction">
          <p>Transakcije u</p>
          <label htmlFor="TransactionCasino">
            Casino
            <input type="radio" id="TransactionCasino" />
          </label>
          <label htmlFor="TransactionChange">
            Mjenjačnica
            <input type="radio" id="TransactionChange" />
          </label>
          <label htmlFor="TransactionPOS">
            POS
            <input type="radio" id="TransactionPOS" />
          </label>
        </div>

        <div className="DeepAnalysis-rest-suspicious">
          <p>Stranka je sumnjiva osoba</p>
          <label htmlFor="SuspiciousYes">
            Da
            <input type="radio" id="SuspiciousYes" />
          </label>
          <label htmlFor="SuspiciousNo">
            Ne
            <input type="radio" id="SuspiciousNo" />
          </label>
        </div>
      </div>
      <div className="DeepAnalysis-remark">
        <label>
          Napomena
          <textarea />
        </label>
      </div>
    </div>
  );
};
//dATUM I VRIJEME POVUĆI
export default DeepAnalysis;
