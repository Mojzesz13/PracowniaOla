import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerConainer">
      <div className="column">
        <p>ul. Gen. Jerzego Ziętka 84</p>
        <p>41-400 Mysłowice</p>
        <p>woj. śląskie</p>
      </div>
      <div className="column">
        <a href="https://www.facebook.com/pracowniamodyslubnejiwieczorowej">
          <i className="fab fa-facebook-square fa-2x" />
        </a>
        <p>tel. 789-346-568</p>
        <a href="mailto:pracowniaaleksandra@gmail.com">
          pracowniaaleksandra@gmail.com
        </a>
      </div>
      <div className="column">
        <p>Pn-pt: 10:00 - 18:00</p>
        <p>Sb: 09:00 - 13:00</p>
        <p>Nd: nieczynne</p>
      </div>
    </div>
  );
};

export default Footer;
