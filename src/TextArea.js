import React from 'react';
import './TextArea.scss';

const TextArea = () => {
  return (
    <div className="TextArea">
      <textarea placeholder="Napomena" />
      <button className="TextArea-btn">Kreiraj stranku</button>
    </div>
  );
};

export default TextArea;
