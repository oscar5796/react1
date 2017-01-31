import React from 'react';
import {ADD, SELECTED_ITEM} from '../../actions/action_const.js';
import {connect} from 'react-redux';
import MenuItemContent from '../menu-item-content/menu-item-content.js';
import Immutable from 'immutable';


class MenuItem extends React.Component {

    render() {
    return <li className='menu__item '
               onClick={()=>{
                   this.props.add(this.props.numToAdd);
                   this.props.clicked(this.props.itemId);
               }}
            >
        <MenuItemContent selected = {this.props.itemId === this.props.selectedItem.get('itemSelected')} name={this.props.name} itemId={this.props.itemId}/>
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