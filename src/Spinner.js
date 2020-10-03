import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.scss';

function Spinner() {
  return (
    <div className="Spinner">
      <CircularProgress style={{ color: '#1bb6c1' }} />
    </div>
  );
}

export default Spinner;
