import React from 'react';
import Menu from './components/menu/menu.js';
import './components/menu/menu-styles.scss';
import ResultComponent from './components/resultComponent/resultComponent.js';
import SimpleMenu from './components/simple_menu/simple_menu';

const App = React.createClass({


	render() {
		return (
			<div>
				<Menu/>
				<ResultComponent/>
				<SimpleMenu/>
				{this.props.children}
			</div>
		)
	}
});

export default App;