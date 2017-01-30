/**
 * Created by oscar.santisteban on 1/30/2017.
 */
import Immutable from 'immutable';
import SELECTED_ITEM from '../actions/action_const.js';

const initState = Immutable.Map({
    itemSelected: null
});

export const selectedReducer = (state = initState, action)=>{
    switch (action.type){
        case "SELECTED_ITEM":
            state = state.set('itemSelected', action.payload);
            console.log(state.get('itemSelected'));
        break;
    }
    return state;
}
