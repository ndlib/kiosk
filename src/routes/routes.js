'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import Home from './Home.js';
import Maps from './Maps.js';
import CallNumber from './CallNumber.js';
import Directory from './Directory.js'

export default function() {
  const history = createHistory();
  return (
    <Router history={ history }>
      <Route path="/" component="div">
        <IndexRoute component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/maps" component={ Maps } />
        <Route path="/callnumber" component={ CallNumber } />
        <Route path="/directory" component={ Directory } />
      </Route>
    </Router>
  );
}
