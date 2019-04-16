import React, { Component } from 'react';
import './App.css';

import HomeContainer from './containers/HomeContainer.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: ''
		};
	}

	loginUser = (userJson) => {
		this.setState({
			currentUser: {
				id: userJson.id,
				firstName: userJson.first_name,
				lastName: userJson.last_name
			}
		});
		console.log('user logged in');
	};

	logoutUser = () => {
		this.setState({
			currentUser: ''
		});
		console.log('user logged out');
	};

	render() {
		return (
			<div>
				<HomeContainer
					currentUser={this.state.currentUser}
					loginUser={this.loginUser}
					logoutUser={this.logoutUser}
				/>
			</div>
		);
	}
}

export default App;
