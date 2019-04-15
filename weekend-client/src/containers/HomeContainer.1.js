import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
				<LoginForm />
			</div>
		);
	}
}

export default HomeContainer;
