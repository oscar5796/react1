/**
 * Created by oscar.santisteban on 1/30/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';

class ResultComponent extends React.Component {
    render(){
        return <div>
            <p>{this.props.result.get('result')}</p>
     /*      <input onClick={this.props.request()} type="button" value='CLICK ME'></input>*/
           {/*<p>{this.props.response.get('response')}</p>*/}
        </div>
    }
}

const mapStateToProps = (state)=>{
    return {
        result:state.reducer
        /*response: state.requestReducer*/
    };
};
/*const mapDispatchToProps = (dispatch)=>{
    return{
        request: () => {
            dispatch(champsResult());
        }
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps())(ResultComponent);
