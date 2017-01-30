/**
 * Created by oscar.santisteban on 1/30/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';

class ResultComponent extends React.Component {
    render(){
        return <p>{this.props.result.get('result')}</p>
    }
}

const mapStateToProps = (state)=>{
    return {
        result:state.reducer
    };
};


export default connect(mapStateToProps, null)(ResultComponent);
