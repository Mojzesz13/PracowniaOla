import React from 'react';
import DecorationBar from '../../common/decorationBar';
import './mobile.scss';
import { weddingData } from '../../common/galleryDataBase';
import ButtonGallery from '../../common/buttonGallery';

const MobileWedding = (props) => {
  const handleBack = () => {
    props.history.push('/');
  };

  return (
    <div className="mainContainer">
      <DecorationBar title="Nasze Projekty" />
      {weddingData.map((obj, index) => (
        <div className="imgContainer" key={index}>
          <img src={obj.image} id={index} alt={obj.title} />
          <div className="cardInfo" id={index}>
            <h1 className="cardTitle">{obj.title}</h1>
          </div>
        </div>
      ))}
      <ButtonGallery handleBack={handleBack} buttonName={'Wstecz'} />
    </div>
  );
};

export default MobileWedding;
