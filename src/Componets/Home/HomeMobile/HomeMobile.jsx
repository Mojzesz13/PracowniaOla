import React from 'react';
import '../Home.scss';
import Navbar from '../Navigation/Navbar';
import Main from '../Main/Main.jsx';
import Wedding from '../Dresses/Wedding.jsx';
import Evening from '../Dresses/Evening.jsx';
import Blog from '../Blog/Blog.jsx';
import Contact from '../Contakt/Contact.jsx';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

const HomeMobile = ({ isMobile }) => {
  return (
    <div className="version mobile">
      <Navbar isMobile={{ isMobile }} />
      <Main />
      <AboutUs isMobile={{ isMobile }} />
      <Wedding isMobile={{ isMobile }} />
      <Evening isMobile={{ isMobile }} />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeMobile;
