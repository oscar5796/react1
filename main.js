import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('app'));