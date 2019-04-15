import React, { Component } from 'react';
import LoginContainer from './LoginContainer.js';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
				<LoginContainer />
			</div>
		);
	}
}

export default HomeContainer;
