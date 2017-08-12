import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Carosel from './Carosel';
import store from './store';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component = {Carosel} />
  </Router>
);

export default connect(null, null)(Routes);
