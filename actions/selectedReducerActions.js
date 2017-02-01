/**
 * Created by oscar.santisteban on 2/1/2017.
 */
import {SELECTED_ITEM, CHAMP_SUCCESS, CHAMP_ERROR} from './action_const.js';
import {getChamps} from '../api/api.js';
import request from 'superagent';
export function selectItem(itemNumber){
    return{
        type: SELECTED_ITEM,
        payload: itemNumber
    }
}
