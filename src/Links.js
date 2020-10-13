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
        <a href="https://www.zakon.hr/z/117/Zakon-o-sprje%C4%8Davanju-pranja-novca-i-financiranju-terorizma" target="_blank">
          <li>
            Najnoviji zakon o sprječavanju pranja novca i financiranja terorizma{' '}
          </li>
        </a>

        <a href="https://narodne-novine.nn.hr/search.aspx?upit=Zakon+o+sprje%C4%8Davanju+pranja+novca+i+financiranja+terorizma&naslovi=da&sortiraj=1&kategorija=1&rpp=10&qtype=3&pretraga=da" target="_blank">
          <li>
            Svi zakoni o sprječavanju pranja novca i financiranja terorizma{' '}
          </li>
        </a>

        <a href="https://mfin.gov.hr/istaknute-teme/ured-za-sprjecavanje-pranja-novca/143" target="_blank">
          <li> Ured za sprječavanje pranja novca </li>
        </a>

        <a href="https://mfin.gov.hr/" target="_blank">
          {' '}
          <li>Ministarstvo financija </li>
        </a>

        <a href="https://narodne-novine.nn.hr/clanci/sluzbeni/2019_01_1_6.html" target="_blank">
          <li>
            {' '}
            Pravilnik o obavještavanju ureda za sprječavanje pranja novca{' '}
          </li>
        </a>

        <a href="https://www.porezna-uprava.hr/Stranice/Naslovnica.aspx" target="_blank">
          <li>Porezna uprava </li>
        </a>

        <a href="https://www.hnb.hr/" target="_blank">
          {' '}
          <li>Hrvatska narodna banka</li>
        </a>

        <a href="https://www.hanfa.hr/" target="_blank">
          {' '}
          <li>Hrvatska agencija za nadzor financijskih usluga</li>
        </a>

        <li>
          <a href="https://mup.gov.hr/" target="_blank">Ministarstvo unutarnjih poslova</a>
        </li>
      </ul>
    </div>
  );
};

export default Law;
