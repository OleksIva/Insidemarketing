import React, { useState } from 'react';
import './Card.scss';
import trueSvg from '../media/true.svg';
import falseSvg from '../media/false.svg'

const TabContent = ({ activeTab, cardData }) => {
  const IconWithCondition = ({ condition, trueSvg, falseSvg }) => {
    return condition ? (
      <img src={trueSvg} className='true-svg' alt='trueicon' />
    ) : (
      <img src={falseSvg} className='false-svg' alt='falseicon' />
    );
  };
  switch (activeTab) {
    case 'Allgemein':
      return <table class="info-table">
      <tr class="info-table__category-header">
        <th>Allgemeines</th>
        <td></td>
      </tr>
      <tr>
        <td class="info-table__item">Kartenanbieter</td>
        <td>{cardData.Kartenanbieter}</td>
      </tr>
      <tr>
        <td class="info-table__item">Kartenname</td>
        <td>{cardData.Kartenname}</td>
      </tr>
      <tr>
        <td class="info-table__item">Kartengesellschaft</td>
        <td>{cardData.Kartengesellschaft}</td>
      </tr>
      <tr>
        <td class="info-table__item">Karten-Art</td>
        <td>{cardData.KartenArt}</td>
      </tr>
      <tr>
        <td class="info-table__item">Rechnungsausgleich</td>
        <td>{cardData.Rechnungsausgleich}</td>
      </tr>
    
      <tr class="info-table__category-header">
        <th>Grundgebühr & Zinsen</th>
        <td></td>
      </tr>
      <tr>
        <td class="info-table__item">Kartengebühr pro Jahr</td>
        <td>{cardData.KartengebührProJahr}</td>
      </tr>
      <tr>
        <td class="info-table__item">Eff. Jahreszins</td>
        <td>{cardData.EffJahreszins}</td>
      </tr>
    
      <tr class="info-table__category-header">
        <th>Eigenschaften & Funktionen</th>
        <td></td>
      </tr>
      <tr>
        <td class="info-table__item">Girokonto bei Anbieter nötig</td>
        <td>{cardData.GirokontoBeiAnbieterNötig}</td>
      </tr>
      <tr>
        <td class="info-table__item">Partnerkarte</td>
        <td>{cardData.Partnerkarte}</td>
      </tr>
      <tr>
        <td class="info-table__item">Kontaktlos bezahlen</td>
        <td>{cardData.KontaktlosBezahlen}</td>
      </tr>
      <tr>
        <td class="info-table__item">Mobil bezahlen</td>
        <td><span class="highlight">Apple Pay</span>, <span class="highlight">Google Pay</span>
        <ul className="info-table__apps-list">
              {cardData.MobilBezahlen.map((app, index) => (
                <li key={index} className="info-table__apps-item">{app}</li>
              ))}
            </ul>
        </td>
      </tr>
    
      <tr class="info-table__category-header">
        <th>Weitere Infos</th>
        <td></td>
      </tr>
      <tr>
        <td class="info-table__item">Haftung bei Kartenverlust</td>
        <td>{cardData.HaftungBeiKartenverlust}</td>
      </tr>
      <tr>
        <td class="info-table__item">Ersatzkarte</td>
        <td>{cardData.Ersatzkarte}</td>
      </tr>
    </table>
      
      
    case 'Bargeld / Bezahlung':
      return <table class="info-table">
      <tr class="info-table__category-header">
        <th>Gebühren bei Bezahlung</th>
        <td></td>
      </tr>
      <tr>
        <td class="info-table__item">Karteneinsatz Inland</td>
        <td>{cardData.KarteneinsatzInland}</td>
      </tr>
      <tr>
        <td class="info-table__item">Karteneinsatz Euro-Zone</td>
        <td>{cardData.KarteneinsatzEuroZone}</td>
      </tr>
      <tr>
        <td class="info-table__item">Karteneinsatz im Ausland</td>
        <td>{cardData.KarteneinsatzImAusland}</td>
      </tr>
      <tr class="info-table__category-header">
        <th>Gebühren Bargeld abheben</th>
        <td></td>
      </tr>
      <tr>
        <td class="info-table__item">Bargeld abheben Inland</td>
        <td>{cardData.BargeldAbhebenInland}</td>
      </tr>
      <tr>
        <td class="info-table__item">Bargeld abheben Euro-Zone</td>
        <td>{cardData.BargeldAbhebenEuroZone}</td>
      </tr>
      <tr>
        <td class="info-table__item">Bargeld abheben Ausland</td>
        <td>{cardData.BargeldAbhebenAusland}</td>
      </tr>
    </table> ;
      case 'Versicherung':
      return <table class="info-table">
      <tr>
        <td class="info-table__item">Auslandskrankenversicherung</td>
        <td><IconWithCondition condition={cardData.Auslandskrankenversicherung} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Reiseunfallversicherung</td>
        <td><IconWithCondition condition={cardData.Reiseunfallversicherung} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Reiserücktrittsversicherung</td>
        <td><IconWithCondition condition={cardData.Reiserücktrittsversicherung} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Reisegepäckversicherung</td>
        <td><IconWithCondition condition={cardData.Reisegepäckversicherung} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Rechtsschutz für Mietwagen</td>
        <td><IconWithCondition condition={cardData.RechtsschutzFürMietwagen} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Haftpflicht für Mietwagen</td>
        <td><IconWithCondition condition={cardData.HaftpflichtFürMietwagen} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Vollkaskoversicherung für Mietwagen</td>
        <td><IconWithCondition condition={cardData.VollkaskoversicherungFürMietwagen} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
    </table>;
      case 'Bonus':
      return <table class="info-table">
      <tr>
        <td class="info-table__item">Geld-Zurück-Bonus (Cashback)</td>
        <td><IconWithCondition condition={cardData.GeldZurückBonus} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Bonus-Punktesystem</td>
        <td><IconWithCondition condition={cardData.BonusPunktesystem} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Startguthaben</td>
        <td><IconWithCondition condition={cardData.Startguthaben} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Tankrabatt</td>
        <td><IconWithCondition condition={cardData.Tankrabatt} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Rabatte auf Mietwagen</td>
        <td><IconWithCondition condition={cardData.RabatteAufMietwagen} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Reiserabatte</td>
        <td><IconWithCondition condition={cardData.Reiserabatte} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
      <tr>
        <td class="info-table__item">Hotelrabatte</td>
        <td><IconWithCondition condition={cardData.Hotelrabatte} trueSvg={trueSvg} falseSvg={falseSvg} /></td>
      </tr>
    </table>;
      case 'Bewertung':
      return <table class="info-table">
      <tr>
        <td class="info-table__item">Gebühren</td>
        <td>{cardData.Gebühren}</td>
      </tr>
      <tr>
        <td class="info-table__item">Funktionen</td>
        <td>{cardData.Funktionen}</td>
      </tr>
      <tr>
        <td class="info-table__item">Zusatz-Leistungen</td>
        <td>{cardData.ZusatzLeistungen}</td>
      </tr>
      <tr>
        <td class="info-table__item">Beantragung</td>
        <td>{cardData.Beantragung}</td>
      </tr>
      <tr>
        <td class="info-table__item">Gesamt:</td>
        <td>{cardData.Gesamt}</td>
      </tr>
    </table>;
    default:
      return null;
  }
};

const Card = ({ cardData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Allgemein');
  const [activeCardIndex, setActiveCardIndex] = useState(null); 

  const toggleDropdown = (index) => {
    setActiveCardIndex(index); 
    setDropdownOpen(activeCardIndex !== index || !dropdownOpen); 
  };

  return (
    <div>
      {cardData.map((item, index) => (
        <div className="credit-card__container" key={item.id}>
        <div className="credit-card__img-name">
          <img src={item.image} alt={item.Kartenname} className="credit-card__image" />
          <h3 className="credit-card__title">{item.Kartenname}</h3>
        </div>
          <div className="credit-card__rating">{item.rating}</div>
          <div className="credit-card__details">
            <ul className="credit-card__features">
              {item.feature.map((feature, index) => (
                <li key={index} className="credit-card__feature">{feature}</li>
              ))}
            </ul>
            <div className="credit-card__annual-fee">{item.KartengebührProJahr}</div>
          </div>
          <div className="credit-card__actions">
            <a href={item.ZumAngebotLink} className="credit-card__offer-button">Zum Angebot &gt;</a>
            <button
              className="credit-card__more-info-button"
              onClick={() => toggleDropdown(index)}
            >
              Mehr Info
            </button>
          </div>
          {dropdownOpen && activeCardIndex === index && (
            <div className="credit-card__dropdown">
              <div className="credit-card__tabs">
                <button onClick={() => setActiveTab('Allgemein')}>Allgemein</button>
                <button onClick={() => setActiveTab('Bargeld / Bezahlung')}>Bargeld / Bezahlung</button>
                <button onClick={() => setActiveTab('Versicherung')}>Versicherung</button>
                <button onClick={() => setActiveTab('Bonus')}>Bonus</button>
                <button onClick={() => setActiveTab('Bewertung')}>Bewertung</button>
              </div>
              <TabContent activeTab={activeTab} cardData={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
