import React from 'react';
import {ADD} from '../../actions/action_const.js'; 
import {connect} from 'react-redux';
import Immutable from 'immutable';


class MenuItem extends React.Component {
    
    render() {
    return <li className='menu__item'>
    <a onClick={()=>this.props.add(this.props.numToAdd)} className='menu__itemContent'>{this.props.name}</a>
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


//export default MenuItem;
export default connect(null,mapDispatchToProps)(MenuItem);