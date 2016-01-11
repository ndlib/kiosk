import './assets/css/flexboxgrid.css';
import './assets/css/font-awesome.css';
import './assets/css/material-icons.css'
import './assets/css/main.css';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getRoutes from './routes/routes.js';
import storeManager from './store/storeManager.js';

const routes = getRoutes();
const store = storeManager();
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('content')
);
