import React, { useState, useEffect } from 'react';
import './ProfileMini.scss';

const ProfileMini = () => {
  return (
    <div className="ProfileMini">
      <ul className="ProfileMini-list">
        <li className="bold">Ivan Marić</li>
        <li>19777349754</li>
        <li className="bold">32</li>
        <li>298 547,00</li>
        <li>85 501,00</li>
        <li>18.9.2020</li>
        <button className="ProfileMini-btn">Upiši transakciju</button>
        <button className="ProfileMini-btn">Detalji stranke</button>
      </ul>
    </div>
  );
};

export default ProfileMini;
