import React from 'react';
import './Links.scss';

const Law = () => {
  return (
    <div className="Links">
      <h1 className="Links-headline">Linkovi</h1>
      <hr class="Links-line"></hr>
      <div className="Links-head">
        <h1>
          Linkovi na stranice povezane sa sprječavanjem pranja novca i
          financiranja terorizma
        </h1>
      </div>

      <ul className="Links-list">
        <li>
          <a href="https://mfin.gov.hr/istaknute-teme/ured-za-sprjecavanje-pranja-novca/143">
            Ured za sprječavanje pranja novca
          </a>
        </li>
        <li>
          <a href="https://mfin.gov.hr/">Ministarstvo financija</a>
        </li>
        <li>
          <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2019_01_1_6.html">
            Pravilnik o obavještavanju ureda za sprječavanje pranja novca
          </a>
        </li>
        <li>
          <a href="https://www.porezna-uprava.hr/Stranice/Naslovnica.aspx">
            Porezna uprava
          </a>
        </li>
        <li>
          <a href="https://www.hnb.hr/">Hrvatska narodna banka</a>
        </li>
        <li>
          <a href="https://www.hanfa.hr/">
            Hrvatska agencija za nadzor financijskih usluga
          </a>
        </li>
        <li>
          <a href="https://mup.gov.hr/">Ministarstvo unutarnjih poslova</a>
        </li>
      </ul>
    </div>
  );
};

export default Law;
