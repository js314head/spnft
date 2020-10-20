import React from 'react';
import './SearchAndSort.scss';
import Dropdown from './Dropdown';

const SearchAndSort = ({
  numOfUsers,
  numOfTransactions,
  sortiraj,
  filter,
  page,
}) => {
  return (
    <div className="SearchAndSort">
      <h1 className="SearchAndSort-headline">Lista stranaka</h1>
      <div className="SearchAndSort-menu">
        <div>
          <ul className="SearchAndSort-stats">
            <li>
              <span>{numOfUsers}</span> stranaka
            </li>
            <li>
              <span>{numOfTransactions}</span> transakcije
            </li>
          </ul>
        </div>
        <div>
          <ul className="SearchAndSort-sort">
            <li>
              {page === 'detail' || page === 'transaction' ? null : (
                <Dropdown sortiraj={sortiraj} />
              )}
            </li>
            <li>
              {page === 'detail' || page === 'transaction' ? null : (
                <input
                  type="text"
                  className="SearchAndSort-search"
                  placeholder="Pretraži"
                  onChange={(e) => filter(e.target.value)}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
      <hr className="SearchAndSort-line"></hr>
    </div>
  );
};

export default SearchAndSort;
