import React from 'react';
import './Links.scss';

const Law = () => {
  return (
    <div className="Links">
      <h1 className="Links-headline">Linkovi</h1>
      <hr className="Links-line"></hr>
      <div className="Links-head">
        <h1>
          Linkovi na stranice povezane sa sprječavanjem pranja novca i
          financiranja terorizma
        </h1>
      </div>
      <ul className="Links-list">
        <a href="https://www.zakon.hr/z/117/Zakon-o-sprje%C4%8Davanju-pranja-novca-i-financiranju-terorizma">
          <li>
            Najnoviji zakon o sprječavanju pranja novca i financiranja terorizma{' '}
          </li>
        </a>

        <a href="https://narodne-novine.nn.hr/search.aspx?upit=Zakon+o+sprje%C4%8Davanju+pranja+novca+i+financiranja+terorizma&naslovi=da&sortiraj=1&kategorija=1&rpp=10&qtype=3&pretraga=da">
          <li>
            Svi zakoni o sprječavanju pranja novca i financiranja terorizma{' '}
          </li>
        </a>

        <a href="https://mfin.gov.hr/istaknute-teme/ured-za-sprjecavanje-pranja-novca/143">
          <li> Ured za sprječavanje pranja novca </li>
        </a>

        <a href="https://mfin.gov.hr/">
          {' '}
          <li>Ministarstvo financija </li>
        </a>

        <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2019_01_1_6.html">
          <li>
            {' '}
            Pravilnik o obavještavanju ureda za sprječavanje pranja novca{' '}
          </li>
        </a>

        <a href="https://www.porezna-uprava.hr/Stranice/Naslovnica.aspx">
          <li>Porezna uprava </li>
        </a>

        <a href="https://www.hnb.hr/">
          {' '}
          <li>Hrvatska narodna banka</li>
        </a>

        <a href="https://www.hanfa.hr/">
          {' '}
          <li>Hrvatska agencija za nadzor financijskih usluga</li>
        </a>

        <li>
          <a href="https://mup.gov.hr/">Ministarstvo unutarnjih poslova</a>
        </li>
      </ul>
    </div>
  );
};

export default Law;
