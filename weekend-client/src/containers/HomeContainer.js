import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';
import UserPageContainer from './UserPageContainer';


class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
<<<<<<< HEAD
				{this.props.currentUser?
					<UserPageContainer />
					:
					<UserFormContainer
						currentUser={this.props.currentUser}
						loginUser={this.props.loginUser}
						logoutUser={this.props.logoutUser}
					/>
				}
=======
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
>>>>>>> ddeae65bc2bdfb88d6705ec2c62065561cb9b2c7
			</div>
		);
	}
}

export default HomeContainer;
