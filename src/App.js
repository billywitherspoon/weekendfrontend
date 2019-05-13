import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer.js';
import UserPageContainer from './containers/UserPageContainer.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
			gmapsLoaded: false
		};
	}

	initMap = () => {
		this.setState({
			gmapsLoaded: true
		});
	};

	componentDidMount() {
		window.initMap = this.initMap;
		const gmapScriptEl = document.createElement(`script`);
		gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA&libraries=places&callback=initMap`;
		document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl);
	}

	loginUser = (userJson) => {
		var user = {
			id: userJson.id,
			firstName: userJson.first_name,
			lastName: userJson.last_name
		};
		var jsonUser = JSON.stringify(user);
		sessionStorage.setItem('user', `${jsonUser}`);
		this.setState({
			loggedIn: true
		});
	};

	logoutUser = () => {
		sessionStorage.removeItem('user');
		console.log('user logged out');
		this.setState({
			loggedIn: false
		});
	};
	render() {
		return (
			<div>
				{this.state.loggedIn && this.state.gmapsLoaded ? (
					<UserPageContainer logoutUser={this.logoutUser} />
				) : (
					<HomeContainer loginUser={this.loginUser} logoutUser={this.logoutUser} />
				)}
			</div>
		);
	}
}

export default App;
