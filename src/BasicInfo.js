import React from 'react';
import './BasicInfo.scss';

const BasicInfo = ({
  name,
  setName,
  adress,
  setAdress,
  dateOfBirth,
  setDateOfBirth,
  oib,
  setOib,
}) => {
  return (
    <div className="BasicInfo">
      <p className="BasicInfo-subtitle">Osnovni podaci</p>
      <label htmlFor="name">
        Ime i prezime
        <input
          autoFocus
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="adress">
        Prebivalište
        <input
          required
          type="text"
          id="adress"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
      </label>
      <label htmlFor="dateOfBirth">
        Datum rođenja
        <input
          required
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <label htmlFor="oib">
        OIB
        <input
          required
          type="text"
          id="oib"
          value={oib}
          onChange={(e) => setOib(e.target.value)}
        />
      </label>
    </div>
  );
};

export default BasicInfo;
