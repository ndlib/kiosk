'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import Home from './Home.js';

export default function() {
  const history = createHistory();
  return (
    <Router history={ history }>
      <Route path="/" component="div">
        <IndexRoute component={ Home } />
        <Route path="/home" component={ Home } />
      </Route>
    </Router>
  );
}
