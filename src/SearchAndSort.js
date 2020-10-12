import React, { Component} from 'react';
import './SearchAndSort.scss';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';

class SearchAndSort extends Component{
  constructor(props) {
    super(props)
    this.state = {numOfTransactions : 0}
    this.state = {numOfUsers : 0}
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({numOfUsers: this.props.numOfUsers, numOfTransactions: this.props.numOfTransactions})
    }, 1000)

  }

  render() {

    return (
      <div className="SearchAndSort">
        <h1 className="SearchAndSort-headline">Lista stranaka</h1>
        <div className="SearchAndSort-menu">
          <div>
            <ul className="SearchAndSort-stats">
              <li>
    <span></span> stranke
              </li>
              <li>
    <span></span> transakcije
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
        <hr className="SearchAndSort-line"></hr>
      </div>
    );
  }
};

export default SearchAndSort;
