import React from 'react';
import './decorationBar.scss';

const DecorationBar = ({ title }) => {
  return (
    <div className="decorationBarContainer">
      <p>{title}</p>
    </div>
  );
};

export default DecorationBar;
