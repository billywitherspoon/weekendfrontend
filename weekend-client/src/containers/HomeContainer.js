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
				{this.props.currentUser?
					<UserPageContainer />
					:
					<UserFormContainer
						currentUser={this.props.currentUser}
						loginUser={this.props.loginUser}
						logoutUser={this.props.logoutUser}
					/>
				}
			</div>
		);
	}
}

export default HomeContainer;
