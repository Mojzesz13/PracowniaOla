import React from 'react';
import '../Home.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Main from '../Main/Main.jsx';
import Dresses from '../Dresses/Dresses.jsx';
import Wedding from '../Dresses/Wedding.jsx';
import Evening from '../Dresses/Evening.jsx';
import Blog from '../Blog/Blog.jsx';
import Contact from '../Contakt/Contact.jsx';
import AboutUs from '../AboutUs/AboutUs';
import NotFound from '../../common/NotFound';

const HomeDesktop = ({ isMobile }) => {
  return (
    <div className="version desktop">
      <Router>
        <Navbar isMobile={isMobile} />
        <Switch>
          <Route exact path="/" component={Main} isMobile={isMobile} />
          <Route path="/dresses" component={Dresses} />
          <Route
            path="/weddingDresses"
            component={Wedding}
            isMobile={isMobile}
          />
          <Route
            path="/eveningDresses"
            component={Evening}
            isMobile={isMobile}
          />
          <Route path="/blog" component={Blog} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default HomeDesktop;
