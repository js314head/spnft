import React from 'react';
import './MiniTransaction.scss';

const MiniTransaction = ({ iznos, datum, lokacija }) => {
  return (
    <div className="MiniTransaction">
      <p>{datum}</p>
      <p>{iznos}</p>

      <p>{lokacija}</p>
    </div>
  );
};

export default MiniTransaction;
