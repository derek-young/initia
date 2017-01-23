import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './home.jsx';
import Threads from './threads.jsx';
import Create from './createThread.jsx';
import ThreadView from './threadView.jsx';
import Thread from './thread.jsx';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="threads" component={Threads}>
      <Route path="create" component={Create}/>
      <Route path="view" component={ThreadView}>
        <Route path=":thread" component={Thread}/>
      </Route>
    </Route>
  </Router>, document.getElementById('master'));
