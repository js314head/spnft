import React from 'react';
import './Dropdown.scss';

const Dropdown = ({sortiraj}) => {
    return (
        <div  className='Dropdown'>
            <select onChange={sortiraj} className='Dropdown-select' id='Dropdown'>
              <option>Sortiraj prema</option>
              <option value='Transakcije'>Broj transakcija</option>
              <option value='Uplate'>Iznos uplata</option>
              <option value='Isplate'>Iznos isplata</option>
              <option value='PosljednjaTransakcija'>Posljednja transakcija</option>
            </select>
          </div>
    )
}

export default Dropdown