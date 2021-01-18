import React, { useState, useEffect } from 'react';
import './Home.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeMobile from './HomeMobile/HomeMobile';
import HomeDesktop from './HomeDesktop/HomeDesktop';
import MobileWedding from './Dresses/MobileWedding';
import MobileEvening from './Dresses/MobileEvening';
import NotFound from '../common/NotFound';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const resize = () => {
    let currentView = window.innerWidth <= 767;
    if (currentView !== isMobile) {
      setIsMobile(currentView);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize.bind(this));
    resize();
    return window.removeEventListener('resize', resize.bind(this));
  });

  if (isMobile) {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomeMobile} isMobile={isMobile} />
          <Route path="/weddingDressesM" component={MobileWedding} />
          <Route path="/eveningDressesM" component={MobileEvening} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
  return <HomeDesktop isMobile={isMobile} />;
};

export default Home;
