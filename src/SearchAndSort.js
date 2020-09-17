import React from 'react';
import './SearchAndSort.scss';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';

const SearchAndSort = () => {
  return (
    <div className="SearchAndSort">
      <h1 className="SearchAndSort-headline">Lista stranaka</h1>
      <div className="SearchAndSort-menu">
        <div>
          <ul className="SearchAndSort-stats">
            <li>
              <span>32</span> stranke
            </li>
            <li>
              <span>596</span> transakcije
            </li>
          </ul>
        </div>
        <div>
          <ul className="SearchAndSort-sort">
            <li>
              <span>
                <SortIcon className="svg" />
              </span>{' '}
              Sortiraj
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
      <hr class="SearchAndSort-line"></hr>
    </div>
  );
};

export default SearchAndSort;
