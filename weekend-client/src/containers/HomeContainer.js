import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';
import DestinationFormContainer from './DestinationFormContainer';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
				<button class="button" id="logout-button" onClick={this.props.logoutUser}>
					Logout
				</button>
				<DestinationFormContainer
					currentUser={this.props.currentUser}
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
				/>
				<UserFormContainer
					currentUser={this.props.currentUser}
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
				/>
			</div>
		);
	}
}

export default HomeContainer;
