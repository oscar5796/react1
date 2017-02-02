/**
 * Created by oscar.santisteban on 2/2/2017.
 */

import React from 'react';
import createFragment from 'react-addons-create-fragment';
import {connect} from 'react-redux';

class ChampionsView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        /*const listChamps = createFragment({
            champions: this.props.champs
        });*/
        /*const listChamps = this.props.champs.toJS().map((champ)=>{
            <li>{champ.id}</li>
        });*/
        const listChamps = (()=>{
            if(this.props.champs != null){
                this.props.champs.map((champ)=>{
                    return <li>{champ.id}</li>
                })
            }
            else{
                return <li>WITHOUT DATA</li>
            }
        })();



        return <div>
            ChampsString:<br/>
            {this.props.champs?this.props.champs.map((champ)=>{
                return <li key={champ.id}>{champ.id}</li>
            }):<li>WITHOUT DATA</li>}
        </div>
    }
}

const mapStateToProps = (state)=>{
    return{
        champs: state.requestReducer.get('response')
    }
}

export default connect(mapStateToProps, null)(ChampionsView);
