import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';
import UserPageContainer from './UserPageContainer';
import DestinationFormContainer from './DestinationFormContainer';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="home-container">
				<DestinationFormContainer
					currentUser={this.props.currentUser}
					loginUser={this.props.loginUser}
					logoutUser={this.props.logoutUser}
				/>
				{this.props.currentUser ? (
					<UserPageContainer currentUser={this.props.currentUser} logoutUser={this.props.logoutUser} />
				) : (
					<UserFormContainer
						currentUser={this.props.currentUser}
						loginUser={this.props.loginUser}
						logoutUser={this.props.logoutUser}
					/>
				)}
			</div>
		);
	}
}

export default HomeContainer;
