import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Dropdown.scss';

const Dropdown = () => {
    return (
        <div  className='Dropdown'>
          <FormControl>
            <InputLabel className='Dropdown-label'>Sortiraj prema: </InputLabel>
            <Select className='Dropdown-select'>
              <MenuItem >Abeceda</MenuItem>
              <MenuItem >Broj transackija</MenuItem>
              <MenuItem >Iznos uplata</MenuItem>
              <MenuItem >Iznos isplata</MenuItem>
            </Select>
          </FormControl>
          </div>
    )
}

export default Dropdown