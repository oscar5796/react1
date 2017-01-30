import React from 'react';
import Menu from './components/menu/menu.js';
import './components/menu/menu-styles.scss';
import ResultComponent from './components/resultComponent/resultComponent.js';


const App = React.createClass({


	render() {
		return (
			<div>
				<Menu/>
				<ResultComponent/>
			</div>
		)
	}
});

export default App;