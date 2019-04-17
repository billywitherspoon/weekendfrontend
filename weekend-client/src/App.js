import React, { Component } from 'react';
import './App.css';

import HomeContainer from './containers/HomeContainer.js';
import UserPageContainer from './containers/UserPageContainer.js';
import HomeRouter from './containers/HomeRouter.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false
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
    //route to home page
	};

	logoutUser = () => {
		sessionStorage.removeItem('user');
		console.log('user logged out');
    debugger;
		this.setState({
			loggedIn: false
		});
	};
       // <HomeContainer loginUser={this.loginUser} logoutUser={this.logoutUser} />
	render() {
		return (
			<div>
        {this.state.loggedIn?
        <UserPageContainer logoutUser={this.logoutUser} />
        :
        <HomeRouter loggedIn={this.state.loggedIn} loginUser={this.loginUser} logoutUser={this.logoutUser}/>
        }
      </div>
		);
	}
}

export default App;
