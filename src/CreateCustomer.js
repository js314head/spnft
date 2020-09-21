import React from 'react';
import DeepAnalysis from './DeepAnalysis';
import './CreateCustomer.scss';

const CreateCustomer = ({ handleLogout }) => {
  return (
    <div className="CreateCustomer">
      <h1 className="CreateCustomer-headline">Kreiraj stranku</h1>
      <hr class="CreateCustomer-line"></hr>
      <div className="CreateCustomer-head">
        <h1>Dubinska analiza stranke</h1>
        <p>
          Provodi se kod uplata i isplata povezanih ili jednokratnih u iznosu
          istom ili većem od 15 000,00kn
        </p>
      </div>
      <DeepAnalysis />
    </div>
  );
};

export default CreateCustomer;
