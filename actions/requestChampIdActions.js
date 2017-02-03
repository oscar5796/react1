/**
 * Created by oscar.santisteban on 2/3/2017.
 */
import {CHAMP_SUCCESS,
        CHAMP_ERROR,
        CHAMP_BY_ID_SUCCESS,
        CHAMP_BY_ID_ERROR} from './action_const.js';
import {getChampById} from '../api/api.js';
import request from 'superagent';

/*export function champsResult(dispatch){

 let result = getChamps()
 .then(
 function (response) {
 dispatch(champRequestSuccess(response.body));
 })
 .catch(dispatch(champRequestError(response.error)))


 }*/

export const champByIdResult = (id) =>(dispatch) => {
//  debugger
    let result = getChampById(id)
        .then(function(response){
                dispatch (champByIdSuccess(response.body.champions));
            }, function(response){
                dispatch(champByIdError(response.error));
            }
        )
    //     .catch(response => dispatch(champRequestError(response.error)))
}
/*export function champsResult(){
 (dispatch)=>{
 let result = getChamps()
 .then(
 function(response){
 dispatch(champRequestSuccess(response.body));
 })
 .catch(
 function(response){
 dispatch(champRequestError(response.error));
 })
 }
 }*/
export function champByIdSuccess(response){
    return {
        type: CHAMP_BY_ID_SUCCESS,
        payload: response
    }
}

export function champByIdError(error){
    return {
        type: CHAMP_BY_ID_ERROR,
        payload: error
    }
}
