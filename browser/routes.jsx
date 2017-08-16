import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SignupForm from './SignupForm';
import store from './store';

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component = {SignupForm} />
  </Router>
);

export default connect(null, null)(Routes);
