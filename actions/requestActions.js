/**
 * Created by oscar.santisteban on 2/1/2017.
 */
import {CHAMP_SUCCESS, CHAMP_ERROR} from './action_const.js';
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
    let result = getChamps()
        .then(function(response){
                dispatch (champRequestSuccess(response.body.champions));
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
