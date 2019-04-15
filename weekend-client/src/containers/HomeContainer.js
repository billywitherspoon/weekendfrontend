import React, { Component } from 'react';
import LoginContainer from './LoginContainer.js';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				This is the home container, there should be a Login class below it
				<LoginContainer />
			</div>
		);
	}
}

export default HomeContainer;
