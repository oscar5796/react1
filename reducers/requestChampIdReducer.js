/**
 * Created by oscar.santisteban on 2/3/2017.
 */
import Immutable from 'immutable';
import {CHAMP_BY_ID_SUCCESS, CHAMP_BY_ID_ERROR} from '../actions/action_const.js';


const initState = Immutable.Map({
    champsFetched: 0,
    error: false,
    response: null
});

export const requestReducer = (state = initState, action)=>{
    switch(action.type){
        case CHAMP_BY_ID_SUCCESS:
            state = state.merge(Immutable.Map({
                loading: false,
                error: false,
                response: action.payload
            }));

            console.log(state);
            break;

        case CHAMP_BY_ID_ERROR:
            state.merge({
                loading:false,
                error:true,
                response: action.payload
            })
            break;
    }
    return state;
}

