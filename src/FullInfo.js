import React from 'react';
import './FullInfo.scss';

const FullInfo = ({ user, backToList }) => {
  return (
    <div className="FullInfo">
      <h1>DUBINSKA ANALIZA STRANKE</h1>
      <table>
        <tr>
          <td>Ime</td>
          <td>{user.Ime}</td>
        </tr>
        <tr>
          <td>Adresa</td>
          <td>{user.Adresa}</td>
        </tr>
        <tr>
          <td>Datum rođenja</td>
          <td>{user['Datum rođenja']}</td>
        </tr>
        <tr>
          <td>OIB</td>
          <td>{user.OIB}</td>
        </tr>
        <tr>
          <td>Vrsta dokumenta</td>
          <td>{user['Vrsta dokumenta']}</td>
        </tr>
        <tr>
          <td>Broj dokumenta</td>
          <td>{user['Broj dokumenta']}</td>
        </tr>
        <tr>
          <td>Država izdavatelja dokumenta</td>
          <td>{user['Država izdavatelja dokumenta']}</td>
        </tr>
        <tr>
          <td>Državljanstvo</td>
          <td>{user.Državljanstvo}</td>
        </tr>
        <tr>
          <td>Vrsta transackije</td>
          <td>{user['Vrsta transackije']}</td>
        </tr>
        <tr>
          <td>Politički izložena stranka</td>
          <td>{user['Politički izložena stranka']}</td>
        </tr>
        <tr>
          <td>Sumnjiva stranka</td>
          <td>{user['Sumnjiva stranka']}</td>
        </tr>
        <tr>
          <td>Napomena</td>
          <td>{user.Napomena}</td>
        </tr>
      </table>
      <button className="FullInfo-btn" onClick={backToList}>
        Vrati se
      </button>
    </div>
  );
};

export default FullInfo;
