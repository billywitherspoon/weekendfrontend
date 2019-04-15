import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js';
import SignUpForm from '../components/SignUpForm.js';

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			firstName: '',
			lastName: '',
			signUpActive: false
		};
	}

	handleUsernameChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value
		});
		console.log('loginState minus last input:', this.state.username);
	};

	handleLoginSubmit = (ev) => {
		ev.preventDefault();
		console.log('Login Submitted:');
		console.log(ev);
	};

	handleSignUpSubmit = (ev) => {
		ev.preventDefault();
		console.log('Sign Up Submitted:');
		console.log(ev);
	};

	ActivateSignUp = () => {
		this.setState({
			signUpActive: true
		});
	};

	renderUserForm = () => {
		if (this.state.signUpActive) {
			return (
				<SignUpForm
					handleNameChange={this.handleNameChange}
					username={this.state.username}
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					handleSignUpSubmit={this.handleSignUpSubmit}
				/>
			);
		} else {
			return (
				<LoginForm
					handleNameChange={this.handleNameChange}
					handleLoginSubmit={this.handleLoginSubmit}
					username={this.state.username}
					activeSignUp={this.activeSignUp}
				/>
			);
		}
	};

	render() {
		return <div id="login-container">{this.renderUserForm()}</div>;
	}
}

export default LoginContainer;
