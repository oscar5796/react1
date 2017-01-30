import ADD from '../actions/action_const.js';
const initState = {
	result: 1,
	lastNumbers:[]
};
export const reducer = (state = initState, action)=>{
	switch (action.type){
		case "ADD":
			Object.assign({}, 
            state, 
            {result: state.result + action.payload, lastNumbers:[...state.lastNumbers, action.payload]});
			console.log("ADDED");
            console.log(state.result);
		break;
	}
	return state;
};