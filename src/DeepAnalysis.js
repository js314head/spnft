import React from 'react';
import './DeepAnalysis.scss';
import BasicInfo from './BasicInfo';
import IdInfo from './IdInfo';
import RestInfo from './RestInfo';
import TextArea from './TextArea';

const DeepAnalysis = () => {
  return (
    <div className="DeepAnalysis">
      <BasicInfo />
      <IdInfo />
      <RestInfo />
      <TextArea />
    </div>
  );
};

export default DeepAnalysis;
