import React from 'react';
import './Legend.scss';

const Legend = () => {
  return (
    <div className="Legend">
      <ul className="Legend-list">
        <li>Ime i prezime</li>
        <li>OIB</li>
        <li className="invisible">Broj transakcija</li>
        <li className="invisible">Ukupne uplate (kn)</li>
        <li className="invisible">Ukupne isplate (kn)</li>
        <li className="invisible">Posljednja transakcija</li>
        <button className="unvisible">Upiši transakciju</button>
        <button className="unvisible">Detalji stranke</button>
      </ul>
    </div>
  );
};

export default Legend;
