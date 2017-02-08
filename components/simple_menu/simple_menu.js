/**
 * Created by oscar.santisteban on 2/7/2017.
 */
import React, { Component } from 'react';
// import logo from './logo.svg';

import { Link } from 'react-router';



class SimpleMenu extends Component {

    render() {

        const games = 'games';

        return (
            <div className="ui container">
                <div className="ui three item menu ">

                    <Link to="result" className="item" activeClassName="active" > Games</Link>

                </div>
            </div>
        );
    }
}

export default SimpleMenu;