import React from 'react';
import './TextArea.scss';

const TextArea = ({ remark, setRemark }) => {
  return (
    <div className="TextArea">
      <textarea
        placeholder="Napomena"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <button className="TextArea-btn">Kreiraj stranku</button>
    </div>
  );
};

export default TextArea;
