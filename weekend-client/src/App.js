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

	// componentDidMount = () => {
	// if ("geolocation" in navigator) {
	// 	// check if geolocation is supported/enabled on current browser
	// 	navigator.geolocation.getCurrentPosition(
	// 	 success = (position) => {
	// 		// for when getting location is a success
	// 		console.log('latitude', position.coords.latitude,
	// 						'longitude', position.coords.longitude);
	// 	 },
	// 	error = (error_message) => {
	// 	  // for when getting location results in an error
	// 	  console.error('An error has occured while retrieving location', error_message)
	// 	}
	//  }
	//   else {
	// 	// geolocation is not supported
	// 	// get your location some other way
	// 	console.log('geolocation is not enabled on this browser')
	//  }
	// }

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
