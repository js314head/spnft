import React from 'react';
import './SearchAndSort.scss';
import Dropdown from './Dropdown';

const SearchAndSort = ({numOfUsers, numOfTransactions, sortiraj}) => {

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
             <Dropdown sortiraj={sortiraj}/>
            </li>
            <li>
             <input type='text' className='SearchAndSort-search' placeholder='Pretraži'/>
             <i className="fas fa-search fa-lg SearchAndSort-search-icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <hr className="SearchAndSort-line"></hr>
    </div>
  );
};

export default SearchAndSort;
