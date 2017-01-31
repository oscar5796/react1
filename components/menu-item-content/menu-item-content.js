/**
 * Created by oscar.santisteban on 1/31/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {ADD, SELECTED_ITEM} from '../../actions/action_const.js';


class MenuItemContent extends React.Component {

    render(){
        return <a
            value={this.props.itemId}
            className={this.props.selected?'menu__itemContent menu__itemContent--selected':'menu__itemContent'}
            >
            {this.props.name+' '+this.props.itemId+' state '+this.props.selectedItem.get('itemSelected')}
        </a>
    }
}

const mapStateToProps = (state)=>{
    return {
        selectedItem: state.selectedReducer
    };
};

//export default  MenuItemContent;
export default connect(mapStateToProps, null)(MenuItemContent);