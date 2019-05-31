import React from 'react';
import UserFormContainer from './UserFormContainer.js';
import UserPageContainer from './UserPageContainer';

class HomeContainer extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {
			showDestinationFormContainer: false
		};
	}

	//if a user is logged in show the user page info
	renderUserPageContainer = () => {
		if (this.currentUser) {
			return <UserPageContainer logoutUser={this.props.logoutUser} />;
		}
	};

	render() {
		return (
			<div>
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
