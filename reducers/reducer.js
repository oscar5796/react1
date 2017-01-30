import ADD from '../actions/action_const.js';
import Immutable from 'immutable';
const initState = Immutable.Map({
	result: 1,
	lastNumbers:[]
});
export const reducer = (state = initState, action)=>{
	switch (action.type){
		case "ADD":
		//	state = Object.assign({},
        //    state,
        //    {result: state.result + action.payload, lastNumbers:[...state.lastNumbers, action.payload]});
			/*return state.set({result: state.result + action.payload, lastNumbers:[...state.lastNumbers, action.payload]});*/
			state = state.set('result', state.get('result') + action.payload);
		break;
	}
	return state;
};