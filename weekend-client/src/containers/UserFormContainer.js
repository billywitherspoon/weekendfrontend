import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js';
import SignUpForm from '../components/SignUpForm.js';

class UserFormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			firstName: '',
			lastName: '',
			signUpActive: false
		};
	}

	handleNameChange = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value
		});
		console.log('state minus last input:', this.state);
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

	toggleSignUp = () => {
		this.setState((st) => {
			return {
				signUpActive: !st.signUpActive
			};
		});
		console.log('sign up toggled');
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
					toggleSignUp={this.toggleSignUp}
				/>
			);
		} else {
			return (
				<LoginForm
					handleNameChange={this.handleNameChange}
					handleLoginSubmit={this.handleLoginSubmit}
					username={this.state.username}
					toggleSignUp={this.toggleSignUp}
				/>
			);
		}
	};

	render() {
		return <div id="user-form-container">{this.renderUserForm()}</div>;
	}
}

export default UserFormContainer;
