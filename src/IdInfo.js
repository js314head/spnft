import React from 'react';
import './IdInfo.scss';

const IdInfo = ({
  id,
  setId,
  idNumber,
  setIdNumber,
  idCountry,
  setIdCountry,
  citizenship,
  setCitizenship,
}) => {
  return (
    <div className="IdInfo">
      <p className="IdInfo-subtitle">Identifikacijska isprava</p>
      <div className="IdInfo-idType">
        <label htmlFor="osobna">
          Osobna
          <input
            required
            type="radio"
            id="osobna"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.checked ? 'osobna' : null)}
          />
        </label>
        <label htmlFor="putovnica">
          Putovnica
          <input
            required
            type="radio"
            id="putovnica"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.checked ? 'putovnica' : null)}
          />
        </label>
        <label htmlFor="vozačka">
          Vozačka
          <input
            required
            type="radio"
            id="vozačka"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.checked ? 'vozačka' : null)}
          />
        </label>
      </div>
      <label htmlFor="idNumber">
        Broj isprave i izdavatelj
        <input
          required
          type="text"
          id="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
      </label>
      <label htmlFor="idCountry">
        Država izdavatelja
        <input
          required
          type="text"
          id="idCountry"
          value={idCountry}
          onChange={(e) => setIdCountry(e.target.value)}
        />
      </label>
      <label htmlFor="citizenship">
        Državljanstvo
        <input
          required
          type="text"
          id="citizenship"
          value={citizenship}
          onChange={(e) => setCitizenship(e.target.value)}
        />
      </label>
    </div>
  );
};

export default IdInfo;
