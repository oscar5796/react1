import React from 'react';
import MenuItem from '../menu-item/menu-item.js';


class Menu extends React.Component{
    
    render(){
		const items = [
    		{id: 1, name: 'First', numToAdd:10},
    		{id: 2, name: 'Second', numToAdd:20},
    		{id: 3, name: 'Third', numToAdd:30}
		];
		const itemList = items.map( (item)=>{return <MenuItem numToAdd={item.numToAdd} key={item.id} name={item.name} />});

        return (
            <div className="menu">
                <ul className="menu__items">
					{itemList}
                </ul>
            </div>
        )
    }
}

export default Menu;