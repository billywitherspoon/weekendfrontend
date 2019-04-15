import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
				<UserFormContainer />
			</div>
		);
	}
}

export default HomeContainer;
