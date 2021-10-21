import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../components/1_header/Nav';

// Pages
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServisePage from './ServisePage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';

const AllPagesWrapper = () => {
  return (
    <>
      <Router>
        <Nav />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/servises' component={ServisePage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
};

export default AllPagesWrapper;
