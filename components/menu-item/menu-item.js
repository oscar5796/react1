import React from 'react';
import {ADD} from '../../actions/action_const.js'; 
import {connect} from 'react-redux';


class MenuItem extends React.Component {
    
    render() {
    return <li className='menu__item'>
    <a onClick={()=>this.props.add(10)} className='menu__itemContent'>{this.props.name}{this.props.result.result}</a>
    </li>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        add: (value) => {
            dispatch({
                type: ADD,
                payload: value
            });
        }
    }
}; 

const mapStateToProps = (state)=>{
    return { 
        result:state.reducer
    };
};
//export default MenuItem;
export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);