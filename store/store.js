import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import logger from 'redux-logger';
import {reducer} from '../reducers/reducer.js';
import {selectedReducer} from '../reducers/selectedReducer.js'


export const store = createStore(combineReducers({reducer, selectedReducer}),
{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/*applyMiddleware(logger())*/);
