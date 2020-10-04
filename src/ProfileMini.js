import React from 'react';
import './ProfileMini.scss';

const ProfileMini = ({ ime, oib, index, openDetailUser }) => {
  return (
    <div className="ProfileMini">
      <ul className="ProfileMini-list">
        <li className="bold name">{ime}</li>
        <li>{oib}</li>
        <li className="bold">32</li>
        <li>298 547,00</li>
        <li>85 501,00</li>
        <li>18.9.2020</li>
        <button className="ProfileMini-btn">Upiši transakciju</button>
        <button
          className="ProfileMini-btn"
          onClick={() => openDetailUser(index)}
        >
          Detalji stranke
        </button>
      </ul>
    </div>
  );
};

export default ProfileMini;
