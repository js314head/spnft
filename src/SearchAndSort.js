import React, { useState, useEffect } from 'react';
import './SearchAndSort.scss';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';
import Dropdown from './Dropdown';

const SearchAndSort = ({numOfUsers, numOfTransactions}) => {

  return (
    <div className="SearchAndSort">
      <h1 className="SearchAndSort-headline">Lista stranaka</h1>
      <div className="SearchAndSort-menu">
        <div>
          <ul className="SearchAndSort-stats">
            <li>
  <span>{numOfUsers}</span> stranke
            </li>
            <li>
  <span>{numOfTransactions}</span> transakcije
            </li>
          </ul>
        </div>
        <div>
          <ul className="SearchAndSort-sort">
            <li>
             <Dropdown />
            </li>
            <li>
              <span>
                <SearchIcon className="svg" />
              </span>{' '}
              Pretraži
            </li>
          </ul>
        </div>
      </div>
      <hr className="SearchAndSort-line"></hr>
    </div>
  );
};

export default SearchAndSort;
