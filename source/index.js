// Core
import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware/core';
import './theme/init';

// Intro
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>
    , document.getElementById('app'));
