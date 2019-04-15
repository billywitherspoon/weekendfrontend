import React, { Component } from 'react';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailLogin: ''
		};
	}

	handleEmailLoginChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value
		});
		console.log('loginState', this.state.emailLogin);
	};

	render() {
		return (
			<form>
				<label>Enter Username</label>
				<input
					type="text"
					name="emailLogin"
					placeholder="Enter your e-mail"
					value={this.state.emailLogin}
					onChange={this.handleEmailLoginChange}
				/>
			</form>
		);
	}
}

export default LoginForm;
