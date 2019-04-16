import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';
import DestinationFormContainer from './DestinationFormContainer'

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
				<DestinationFormContainer />
				<UserFormContainer />
			</div>
		);
	}
}

export default HomeContainer;
