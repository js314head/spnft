import React, { useState } from 'react';
import './DeepAnalysis.scss';
import BasicInfo from './BasicInfo';
import IdInfo from './IdInfo';
import RestInfo from './RestInfo';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import fire from './fire';

const DeepAnalysis = () => {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [oib, setOib] = useState('');
  const [id, setId] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [idCountry, setIdCountry] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [transaction, setTransaction] = useState('');
  const [politics, setPolitics] = useState('');
  const [suspicious, setSuspicious] = useState('');
  const [remark, setRemark] = useState('');
  const [sendingData, setSendingData] = useState(false);
  const userRef = fire.database().ref('users');

  const createCustomer = (e) => {
    e.preventDefault();

    setSendingData(true);
    setName('');
    setAdress('');
    setDateOfBirth('');
    setOib('');
    setId();
    setIdNumber('');
    setIdCountry('');
    setCitizenship('');
    setTransaction('');
    setPolitics('');
    setSuspicious('');
    setRemark('');

    let newUser = userRef.push();
    newUser.set({
      Ime: name,
      Adresa: adress,
      DatumRođenja: dateOfBirth,
      OIB: oib,
      VrstaDokumenta: id,
      BrojDokumenta: idNumber,
      DržavaIzdavateljaDokumenta: idCountry,
      Državljanstvo: citizenship,
      VrstaTransackije: transaction,
      PolitičkiIzloženaStranka: politics,
      SumnjivaStranka: suspicious,
      Napomena: remark,
      Transakcije: [],
      Uplate : 0,
      Isplate: 0,
      BrojTransakcija : 0,
      DatumTransakcije : 0
    });

    setTimeout(() => {
      setSendingData(false);
    }, 4000);
  };

  return (
    <form className="DeepAnalysis" onSubmit={createCustomer}>
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
        transaction={transaction}
        setTransaction={setTransaction}
        politics={politics}
        setPolitics={setPolitics}
        suspicious={suspicious}
        setSuspicious={setSuspicious}
      />
      {sendingData ? (
        <div className="TextArea-info">
          <p>
            <CheckCircleIcon className="TextArea-info-icon" />
            Uspješno ste kreirali stranku!
          </p>
        </div>
      ) : (
        <div className="TextArea">
          <textarea
            placeholder="Napomena"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <button type="submit" className="TextArea-btn">
            Kreiraj stranku
          </button>
        </div>
      )}
    </form>
  );
};

export default DeepAnalysis;
