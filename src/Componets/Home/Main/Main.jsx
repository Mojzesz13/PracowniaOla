import React from 'react';
import './Main.scss';
import ControlledCarousel from '../../common/carousel';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="mainContainer" id="main">
      <ControlledCarousel />
      <Footer />
    </div>
  );
};
export default Home;
