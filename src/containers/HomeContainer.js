import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';
import UserPageContainer from './UserPageContainer';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {
			showDestinationFormContainer: false
		};
	}

	renderUserPageContainer = () => {
		if (this.currentUser) {
			return (
				<UserPageContainer logoutUser={this.props.logoutUser} allDestinations={this.state.allDestinations} />
			);
		}
	};

	render() {
		return (
			<div id="home-container">
				{this.renderUserPageContainer()}
				<UserFormContainer
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
					showDestinationFormContainer={this.state.showDestinationFormContainer}
				/>
			</div>
		);
	}
}

export default HomeContainer;
