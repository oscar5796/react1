/**
 * Created by oscar.santisteban on 2/1/2017.
 */
import {CHAMP_SUCCESS, CHAMP_ERROR} from './action_const.js';
import {getChamps} from '../api/api.js';
import request from 'superagent';

export function champsResult(){
    const url = 'https://lan.api.pvp.net/api/lol/lan/v1.2/champion?api_key=ec421a72-6317-407d-bc1e-f54384350848';
    return dispatch => {

        request('GET',url).then(champRequestSuccess(response.body),champRequestError(response.toError()));

    }
}

export function champRequestSuccess(response){
    return {
        type: CHAMP_SUCCESS,
        payload: response
    }
}

export function champRequestError(error){
    return {
        type: CHAMP_ERROR,
        payload: error
    }
}
