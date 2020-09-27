import React from 'react';
import './BasicInfo.scss';

const BasicInfo = () => {
  return (
    <div className="BasicInfo">
      <p className="BasicInfo-subtitle">Osnovni podaci</p>
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
  );
};

export default BasicInfo;
