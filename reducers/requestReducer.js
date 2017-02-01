/**
 * Created by oscar.santisteban on 2/1/2017.
 */
import Immutable from 'immutable';
import {CHAMP_SUCCESS, CHAMP_ERROR} from '../actions/action_const.js';


const initState = Immutable.Map({
    loading: true,
    error: false,
    response: null
});

export const requestReducer = (state = initState, action)=>{
    switch(action.type){
        case CHAMP_SUCCESS:
            initState.merge({
                loading: false,
                error: false,
                response: action.payload
            });
        break;

        case CHAMP_ERROR:
            initState.merge({
                loading:false,
                error:true,
                response: action.payload
            })
        break;
    }
    return state;
}
