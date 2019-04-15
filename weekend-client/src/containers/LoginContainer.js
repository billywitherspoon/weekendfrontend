import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js';

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				This is the LoginForm container, there should be a login form below it
				<LoginForm />
			</div>
		);
	}
}

export default LoginContainer;
