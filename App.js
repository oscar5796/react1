import React from 'react';
import Menu from './components/menu/menu.js';
import './components/menu/menu-styles.scss';
import {Provider, createStore} from 'react-redux';
import store from './store/store.js';

const App = React.createClass({
	
 
 render() {
   return (
	  <div>
	   <Menu/>
	   <p>12</p>
	   <button >Lanzar</button>
	 </div>
   )
 }
});

export default App;

/*import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const initState = {
	result: 1,
	lastNumbers:[]
};

const reducer = (state = initState, action)=>{
	switch (action.type){
		case "ADD":
			Object.assign({}, state, {result: state.result+action.payload, lastNumbers:[...state.lastNumbers, action.payload]});
			console.log("ADDED");
		break;
	}
	return state;
};
const store = createStore(combineReducers({reducer}), {}, applyMiddleware(logger()));

store.dispatch({
	type: "ADD",
	payload: 10
}); 
store.subscribe(()=>{console.log(store.getState())});*/