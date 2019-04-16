import React, { Component } from 'react';
import UserFormContainer from './UserFormContainer.js';
import DestinationFormContainer from './DestinationFormContainer';
import Navbar from '../components/NavBar';

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div id="home-container">
				<Navbar currentUser={this.props.currentUser} logoutUser={this.props.logoutUser} />
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
