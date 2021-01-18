import React from 'react';
import './buttonGallery.scss';

const ButtonGallery = ({ buttonName, handleBack }) => {
  return (
    <div className="buttonGallery" onClick={handleBack}>
      <div className="line horizontalOne" />
      {buttonName}
      <div className="line horizontalTwo" />
      <div className="line arrowOne" />
      <div className="line arrowTwo" />
    </div>
  );
};

export default ButtonGallery;
