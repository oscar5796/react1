/**
 * Created by oscar.santisteban on 2/1/2017.
 */
import request from 'superagent';

export function getChamps(){
    //https://lan.api.pvp.net/api/lol/lan/v1.2/champion?api_key=ec421a72-6317-407d-bc1e-f54384350848
    const url = 'https://global.api.pvp.net/api/lol/static-data/lan/v1.2/champion?champData=all&api_key=ec421a72-6317-407d-bc1e-f54384350848';

    return request
        .get(url)
        .set('Accept', 'application/json')
        .query({})

}

export function getChampById(id){
    const url = 'https://lan.api.pvp.net/api/lol/lan/v1.2/champion/'+id+'?api_key=ec421a72-6317-407d-bc1e-f54384350848'

    return request
        .get(url)
        .set('Accept', 'application/json')
}