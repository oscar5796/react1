import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import logger from 'redux-logger';
import {reducer} from '../reducers/reducer.js';


export const store = createStore(combineReducers({reducer}), 
{}, 
applyMiddleware(logger()));
