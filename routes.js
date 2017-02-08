/**
 * Created by oscar.santisteban on 2/7/2017.
 */
import App from './App.js';
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ResultComponent from './components/resultComponent/resultComponent';
import ChampionsView from './components/championsView/championsView.js';


export default(
    <Route path="/" component={App}>
        <IndexRoute component={ChampionsView}/>
        <Route path="result" component={ResultComponent}/>
    </Route>
);