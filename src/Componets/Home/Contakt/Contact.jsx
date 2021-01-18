import React from 'react';
import './Contact.scss';
import DecorationBar from '../../common/decorationBar';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
      <DecorationBar title={'Kontakt'} />
      <div className="dataContainer">
        <div className="image" />
        <h2> Pracownia Mody Ślubnej i Wieczorowej / Komis sukien ślubnych</h2>
        <h1>O&#39;la</h1>
        <div className="decorateBar2" />
        <p>ul. Gen. Jerzego Ziętka 84</p>
        <p>41-400 Mysłowice</p>
        <p>woj. śląskie</p>
        <div className="decorateBar2" />
        <h3>tel. 789-346-568</h3>
        <a href="mailto:pracowniaaleksandra@gmail.com">
          pracowniaaleksandra@gmail.com
        </a>
        <div className="decorateBar2" />
        <div className="openingHour">
          <p>Pn-pt: 10:00 - 18:00</p>
          <p>Sb: 09:00 - 13:00</p>
          <p> Nd: nieczynne</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
