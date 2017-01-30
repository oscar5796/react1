import React from 'react';
import {ADD, SELECTED_ITEM} from '../../actions/action_const.js';
import {connect} from 'react-redux';
import Immutable from 'immutable';


class MenuItem extends React.Component {


    
    render() {
    return <li className='menu__item '>
    <a onClick={()=>{this.props.add(this.props.numToAdd); this.props.clicked(this.props.itemId)}
    } className='menu__itemContent'>{this.props.name+' '+this.props.itemId }</a>
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
        },
        clicked: (itemNumber) => {
            dispatch({
                type: SELECTED_ITEM,
                payload: itemNumber
            });
        }
    }
};

const mapStateToProps = (state)=>{
    return {
        selectedItem: state.selectedReducer
    };
};


//export default MenuItem;
export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);