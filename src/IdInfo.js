import React from 'react';
import './IdInfo.scss';

const IdInfo = () => {
  return (
    <div className="IdInfo">
      <p className="IdInfo-subtitle">Identifikacijska isprava</p>
      <div className="IdInfo-idType">
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
  );
};

export default IdInfo;
