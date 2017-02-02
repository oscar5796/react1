/**
 * Created by oscar.santisteban on 1/30/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import {champsResult} from '../../actions/requestActions.js';
import ChampionsView from '../championsView/championsView.js';

class ResultComponent extends React.Component {

    render(){


        return <div>

            <p>{this.props.result.get('result')}</p>
            <input type="button" onClick={()=>this.props.request()} value='CLICK ME'></input>

            <ChampionsView/>
        </div>
    }
}

const mapStateToProps = (state)=>{
    return {
        result:state.reducer,
    };
};
const mapDispatchToProps = (dispatch)=>{
    return{
        request: () => {
            dispatch(champsResult());
        }
    }
}

ResultComponent.defaultProps = {
    champs: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
