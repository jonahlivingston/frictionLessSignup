import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Create from './Create';
import Preview from './Preview';
import Export from './Export';
import { cloneQuestions } from './Preview/PreviewActionCreators'
import store from './store';

const generatePreview = () => {
  store.dispatch(cloneQuestions(store.getState().create.questions))
};

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component = {Create} />
    <Route path='/preview' onEnter = {generatePreview} component={Preview} />
    <Route path='/export' component={Export} />
  </Router>
);

export default connect(null, null)(Routes);
