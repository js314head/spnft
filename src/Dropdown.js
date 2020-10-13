import React from 'react';
import './Dropdown.scss';

const Dropdown = () => {
    return (
        <div  className='Dropdown'>
            <select className='Dropdown-select'>
              <option>Sortiraj prema</option>
              <option>Broj transakcija</option>
              <option>Iznos uplata</option>
              <option>Iznos isplata</option>
              <option>Datum posljednje transakcije</option>
            </select>
          </div>
    )
}

export default Dropdown