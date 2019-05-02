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
			return <UserPageContainer logoutUser={this.props.logoutUser} />;
		}
	};

	//this was in line 17 but does not seem to belong
	//allDestinations={this.state.allDestinations}

	render() {
		return (
			<div id="home-container">
				{this.renderUserPageContainer()}
				<UserFormContainer
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
					showDestinationFormContainer={this.state.showDestinationFormContainer}
				/>
				<script
					async
					defer
					type="text/javascript"
					src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA&libraries=places"
				/>
			</div>
		);
	}
}

export default HomeContainer;
