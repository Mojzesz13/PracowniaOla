import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import LogoImg from './../../../../assets/logo.svg';

const Logo = ({ navbar }) => {
  return (
    <Link to="/">
      <div className={navbar ? 'logoContainer' : 'logoContainer activeLogo '}>
        <img src={LogoImg} alt="logoSlaskSuknieSlubne" />
        <div className="logoText">
          <h1>Pracownia mody </h1>
          <h2>ślubnej i wieczorowej</h2>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
