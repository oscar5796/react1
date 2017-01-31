import React from 'react';
import MenuItem from '../menu-item/menu-item.js';
import {ADD, SELECTED_ITEM} from '../../actions/action_const.js';
import {connect} from 'react-redux';


class Menu extends React.Component{

    itemVerify(){
        console.log('entra');
        if(this.props.itemId === this.props.selectedItem.get('itemSelected')){
            return this.props.className = 'menu__itemContent--selected'
        }
        else if (this.props.itemId != this.props.selectedItem.get('itemSelected')){
            return this.props.className = 'menu__itemContent'
        }
    }
    
    render(){
		const items = [
    		{id: 1, name: 'First', numToAdd:10},
    		{id: 2, name: 'Second', numToAdd:20},
    		{id: 3, name: 'Third', numToAdd:30}
		];

		const itemList = items.map( (item)=>{

		    return <MenuItem itemId={item.id} numToAdd={item.numToAdd} key={item.id} name={item.name} />
		});

        return (
            <div className="menu">
                <ul className="menu__items">
					{itemList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        selectedItem: state.selectedReducer
    };
};


//export default Menu;
export default connect(mapStateToProps, null)(Menu);