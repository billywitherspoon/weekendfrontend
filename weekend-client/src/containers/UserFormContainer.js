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
		fetch(`http://localhost:3000/api/v1/users/username/${this.state.username}`)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				if (json.error) {
					alert(json.error);
				} else {
					this.props.loginUser(json.id);
				}
			});
	};

	toggleSignUp = () => {
		this.setState((st) => {
			return {
				signUpActive: !st.signUpActive
			};
		});
		console.log('sign up toggled');
	};

	handleSignUpSubmit = (ev) => {
		let userData = {
			username: `${this.state.username}`,
			first_name: `${this.state.firstName}`,
			last_name: `${this.state.lastName}`
		};
		console.log(userData);
		ev.preventDefault();
		console.log('Sign Up Submitted:');
		console.log(ev);
		fetch('http://localhost:3000/api/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(userData)
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				if (json.error) {
					alert(json.error);
				} else {
					this.props.loginUser(json.id);
				}
			})
			.catch((error) => console.error('Error', error));
	};

	renderUserForm = () => {
		if (this.state.signUpActive) {
			return (
				<SignUpForm
					currentUser={this.props.currentUser}
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
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
					currentUser={this.props.currentUser}
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
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
