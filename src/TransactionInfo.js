import { ThreeSixtySharp } from '@material-ui/icons';
import React, { Component, useEffect } from 'react';
import fire from './fire';
import MiniTransaction from './MiniTransaction';
import './TransactionInfo.scss';

class TransactionInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {transactions : []}
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({transactions : this.props.transactions})
    }, 500)
  }

  renderUplate() {
    let uplate = []
    this.state.transactions.map(
    item=> item['Vrsta transakcije'] === 'Uplata' ? uplate.push(
      <MiniTransaction 
      datum={item.Datum}
      iznos={item.Iznos}
      lokacija={item.Lokacija}
      
      />
      ) : null
    )
    return uplate
  }

  renderIsplate() {
    let isplate = []
    this.state.transactions.map(
    item=> item['Vrsta transakcije'] === 'Isplata' ? isplate.push(
      <MiniTransaction 
      datum={item.Datum}
      iznos={item.Iznos}
      lokacija={item.Lokacija}
      
      />
      ) : null
    )
    return isplate
  }
  


  render() {
  return <div className="TransactionInfo">
    <div className='TransactionInfo-uplate'>
      <p className='TransactionInfo-headline'>UPLATE</p>
      <div className='TransactionInfo-Legend'>
      <p>DATUM</p>
      <p>IZNOS</p>
      <p>LOKACIJA</p>
      </div>
    {this.state.transactions ? this.renderUplate() : null}

    </div>
    <div className='TransactionInfo-isplate'>
    <p className='TransactionInfo-headline'>ISPLATE</p>
    <div className='TransactionInfo-Legend'>
      <p>DATUM</p>
      <p>IZNOS</p>
      <p>LOKACIJA</p>
      </div>
    {this.state.transactions ? this.renderIsplate() : null}

    </div>
  </div>
}}

export default TransactionInfo;
