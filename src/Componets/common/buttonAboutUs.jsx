import React from 'react';
import './buttonAboutUs.scss';

const ButtonAboutUs = ({ addClass, showOptinion }) => {
  return (
    <div className="buttonContainer">
      <div className="bottomLine leftLine" />
      <div
        className={addClass(
          'arrow leftArrow',
          ' arrowLeftAction',
          showOptinion
        )}
      />
      <div
        className={addClass(
          'arrow rightArrow',
          ' arrowRightAction',
          showOptinion
        )}
      />
      <div className="bottomLine rightLine" />
    </div>
  );
};

export default ButtonAboutUs;
