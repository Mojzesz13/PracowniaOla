import React from 'react';
import { Link } from 'react-router-dom';
import './Dresses.scss';
import Footer from '../Footer/Footer';

const Dresses = () => {
  return (
    <div className="DressesContainer" id="dresses">
      <h1>Wybierz kreacje na Twoją wyjątkową okazję.</h1>
      <section className="imgSection">
        <Link to="/weddingDresses" className="dressesImg first" />
        <Link to="/eveningDresses" className="dressesImg second" />
      </section>
      <Footer />
    </div>
  );
};

export default Dresses;
