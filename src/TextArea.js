import React from 'react';
import './TextArea.scss';

const TextArea = ({ remark, setRemark, createCustomer }) => {
  return (
    <div className="TextArea">
      <textarea
        placeholder="Napomena"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <button className="TextArea-btn" onClick={createCustomer}>
        Kreiraj stranku
      </button>
    </div>
  );
};

export default TextArea;
