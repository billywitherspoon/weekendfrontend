import React, { Component } from 'react';
import './App.css';

import HomeContainer from './containers/HomeContainer.js';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<HomeContainer />
			</div>
		);
	}
}



export default App;
