import React, { useState } from 'react';
import './DeepAnalysis.scss';
import BasicInfo from './BasicInfo';
import IdInfo from './IdInfo';
import RestInfo from './RestInfo';
import TextArea from './TextArea';
import { Policy } from '@material-ui/icons';

const DeepAnalysis = () => {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [oib, setOib] = useState('');
  const [id, setId] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [idCountry, setIdCountry] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [source, setSource] = useState('');
  const [transaction, setTransaction] = useState('');
  const [politics, setPolitics] = useState('');
  const [suspicious, setSuspicious] = useState('');
  const [remark, setRemark] = useState('');

  const createCustomer = (e) => {
    e.preventDefault();
    let user = {
      Ime: name,
      Adresa: adress,
      'Datum rođenja': dateOfBirth,
      OIB: oib,
      'Vrsta dokumenta': id,
      'Broj dokumenta': idNumber,
      'Država izdavatelja dokumenta': idCountry,
      Državljanstvo: citizenship,
      'Izvor informacija': source,
      'Vrsta transackije': transaction,
      'Politički izložena stranka': politics,
      'Sumnjiva stranka': suspicious,
      Napomena: remark,
    };
    console.log(user);
    setName('');
    setAdress('');
    setDateOfBirth('');
    setOib('');
    setId();
    setIdNumber('');
    setIdCountry('');
    setCitizenship('');
    setSource('');
    setTransaction('');
    setPolitics('');
    setSuspicious('');
    setRemark('');
  };

  return (
    <form className="DeepAnalysis">
      <BasicInfo
        name={name}
        setName={setName}
        adress={adress}
        setAdress={setAdress}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
        oib={oib}
        setOib={setOib}
      />
      <IdInfo
        id={id}
        setId={setId}
        idNumber={idNumber}
        setIdNumber={setIdNumber}
        idCountry={idCountry}
        setIdCountry={setIdCountry}
        citizenship={citizenship}
        setCitizenship={setCitizenship}
      />
      <RestInfo
        source={source}
        setSource={setSource}
        transaction={transaction}
        setTransaction={setTransaction}
        politics={politics}
        setPolitics={setPolitics}
        suspicious={suspicious}
        setSuspicious={setSuspicious}
      />
      <TextArea
        remark={remark}
        setRemark={setRemark}
        createCustomer={createCustomer}
      />
    </form>
  );
};

export default DeepAnalysis;
