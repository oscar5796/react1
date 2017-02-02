import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {reducer} from '../reducers/reducer.js';
import {selectedReducer} from '../reducers/selectedReducer.js';
import {requestReducer} from '../reducers/requestReducer.js';

import thunk from 'redux-thunk';

const reducers = combineReducers({reducer, selectedReducer, requestReducer});

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
    reducers,
    enhancers
);
