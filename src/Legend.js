import React from 'react';
import './Legend.scss';

const Legend = () => {
  return (
    <div className="Legend">
      <ul className="Legend-list">
        <li>Ime i prezime</li>
        <li>OIB</li>
        <li>Broj transakcija</li>
        <li>Ukupne uplate (kn)</li>
        <li>Ukupne isplate (kn)</li>
        <li>Posljednja transakcija</li>
        <button className="unvisible">Upiši transakciju</button>
        <button className="unvisible">Detalji stranke</button>
      </ul>
    </div>
  );
};

export default Legend;
