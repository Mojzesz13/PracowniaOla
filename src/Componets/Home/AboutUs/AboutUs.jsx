import React, { useState } from 'react';
import './AboutUs.scss';
import DecorationBar from '../../common/decorationBar';
import Footer from '../Footer/Footer';
import OptinionSection from '../../common/optinionSection';

const AboutUs = () => {
  const [showOptinion, setShowOptinion] = useState(false);
  const [showOptinion2, setShowOptinion2] = useState(false);
  const [showOptinion3, setShowOptinion3] = useState(false);

  const handlerShowInfo = () => {
    setShowOptinion((prevState) => !prevState);
  };

  const handlerShowInfo2 = () => {
    setShowOptinion2((prevState) => !prevState);
  };

  const handlerShowInfo3 = () => {
    setShowOptinion3((prevState) => !prevState);
  };

  let addClass = (firstClass, secondClass, stateName) => {
    let className = firstClass;
    if (stateName) {
      className += secondClass;
    }
    return className;
  };

  let textHolder = (
    <div className="partTexHolder">
      <p>
        Od 2015 roku szyjemy wymarzone suknie na miarę, wykorzystując w pracy
        zarówno własne projekty, jak i indywidualne inspiracje, z którymi
        przychodzą do nas klientki.{' '}
      </p>
      <p>
        Specjalizujemy się w szyciu sukien dla panien młodych plus size. Bez
        względu na rozmiar stworzymy dla Ciebie wyjątkową kreację, która będzie
        podkreślała Twoje atuty i maskowała mankamenty figury.
      </p>
      <p>
        Wiemy, ile emocji wiąże się z przygotowaniami do tego wyjątkowego dnia,
        dlatego do każdej klientki podchodzimy indywidualnie. Zawsze poświęcamy
        maksimum uwagi oraz cierpliwie i z przyjemnością doradzamy, odpowiadamy
        na pytania i rozwiewamy wątpliwości.
      </p>
      <p>
        Pracownia oferuje również szycie sukien wieczorowych, dlatego serdecznie
        zapraszamy do nas nie tylko Panny Młode, ale także mamy, świadkowe i
        druhny.
      </p>
      <p>
        Prowadzimy komis sukien ślubnych, więc jeśli chcesz swojej dać drugie
        życie - przynieś ją do nas!
      </p>
    </div>
  );

  return (
    <div className="aboutUsContainer" id="aboutUs">
      <div className="mainAboutUs">
        <DecorationBar title={'O nas'} />
        <h1> O nas</h1>
        <div className="textAboutUs">{textHolder}</div>
      </div>
      <div className="opinionContainer">
        <div className="titleOpinion">
          <h1> Opinie klientek</h1>
          <div className="textOponion">
            <OptinionSection
              addClass={addClass}
              handlerShowInfo={handlerShowInfo}
              handlerShowInfo2={handlerShowInfo2}
              handlerShowInfo3={handlerShowInfo3}
              showOptinion={showOptinion}
              showOptinion2={showOptinion2}
              showOptinion3={showOptinion3}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
