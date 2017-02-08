/**
 * Created by oscar.santisteban on 2/2/2017.
 */

import React from 'react';
import {connect} from 'react-redux';

class ChampionsView extends React.Component{
    constructor(props){
        super(props);
    }
    list(obj){
        for(var key in obj){
            console.log(key);
            return <li>{obj[key].id}</li>
        }
    }
    render(){

        const list = [];
        for(var champ in this.props.champs){
            list.push(<div key={this.props.champs[champ].id}>
                <img src ={"http://ddragon.leagueoflegends.com/cdn/7.2.1/img/champion/"+this.props.champs[champ].image.full}/>
                <li>{this.props.champs[champ].name}</li>
            </div>);
        }
        //console.log(list);


        if(this.props.fetching === false){
            return  <div>
                ChampsString:1<br/>
                {list}
            </div>
        }
        else{
            return <div>
                <img src="../../assets/default.gif"/>
            </div>
        }

    }
}

const mapStateToProps = (state)=>{
    return{
        champs: state.requestReducer.get('response'),
        loading: state.requestReducer.get('loading'),
        fetching: state.requestReducer.get('fetching')
    }
}

export default connect(mapStateToProps, null)(ChampionsView);
