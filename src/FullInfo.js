import React from 'react';
import './FullInfo.scss';

const FullInfo = ({ userInfo, backToList }) => {
  return (
    <div className="FullInfo">
      <h1>DUBINSKA ANALIZA STRANKE</h1>
      <table>
        <tr>
          <td>Ime</td>
          <td>{userInfo.Ime}</td>
        </tr>
        <tr>
          <td>Adresa</td>
          <td>{userInfo.Adresa}</td>
        </tr>
        <tr>
          <td>Datum rođenja</td>
          <td>{userInfo['DatumRođenja']}</td>
        </tr>
        <tr>
          <td>OIB</td>
          <td>{userInfo.OIB}</td>
        </tr>
        <tr>
          <td>Vrsta dokumenta</td>
          <td>{userInfo['VrstaDokumenta']}</td>
        </tr>
        <tr>
          <td>Broj dokumenta</td>
          <td>{userInfo['BrojDokumenta']}</td>
        </tr>
        <tr>
          <td>Država izdavatelja dokumenta</td>
          <td>{userInfo['DržavaIzdavateljaDokumenta']}</td>
        </tr>
        <tr>
          <td>Državljanstvo</td>
          <td>{userInfo.Državljanstvo}</td>
        </tr>
        <tr>
          <td>Vrsta transackije</td>
          <td>{userInfo['VrstaTransackije']}</td>
        </tr>
        <tr>
          <td>Politički izložena stranka</td>
          <td>{userInfo['PolitičkiIzloženaStranka']}</td>
        </tr>
        <tr>
          <td>Sumnjiva stranka</td>
          <td>{userInfo['SumnjivaStranka']}</td>
        </tr>
        <tr>
          <td>Napomena</td>
          <td>{userInfo.Napomena}</td>
        </tr>
      </table>
      <button className="FullInfo-btn" onClick={backToList}>
        Vrati se
      </button>
    </div>
  );
};

export default FullInfo;
