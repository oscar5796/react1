import React from 'react';
import MenuItem from '../menu-item/menu-item.js';


class Menu extends React.Component{
    
    render(){
		const items = [
    		{id: 1, name: 'First'},
    		{id: 2, name: 'Second'},
    		{id: 3, name: 'Third'}
		];
		const itemList = items.map( (item)=>{return <MenuItem key={item.id} name={item.name} />});

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