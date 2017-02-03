/**
 * Created by oscar.santisteban on 2/1/2017.
 */
import {CHAMP_FETCHING,CHAMP_SUCCESS, CHAMP_ERROR} from './action_const.js';
import {getChamps} from '../api/api.js';
import request from 'superagent';

/*export function champsResult(dispatch){

    let result = getChamps()
        .then(
            function (response) {
                dispatch(champRequestSuccess(response.body));
            })
        .catch(dispatch(champRequestError(response.error)))


}*/

export const champsResult = () =>(dispatch) => {
//  debugger
    dispatch(isFetching());

    let result = getChamps()
        .then(function(response){
                dispatch (champRequestSuccess(response.body.data));
            }, function(response){
                dispatch(champRequestError(response.error));
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
export function isFetching(){
    return {
        type: CHAMP_FETCHING,
        payload: true
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
