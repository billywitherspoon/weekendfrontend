import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Explore from '../components/Explore';

class UserPageContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			viewProfile: true,
			selectedLocation: ''
		};
	}

	//Toggles between user's profile and explore page
	toggleView = () => {
		this.setState((prevState) => {
			return { viewProfile: !prevState.viewProfile };
		});
	};

	render() {
		return (
			<div id="user-page-container">
				<NavBar
					addDestination={this.props.addDestination}
					currentUser={this.props.currentUser}
					logoutUser={this.props.logoutUser}
				/>
				{this.state.viewProfile ? (
					<Profile
						className="destination-list"
						toggleView={this.toggleView}
						addDestination={this.addDestination}
						currentUser={this.props.currentUser}
					/>
				) : (
					<Explore
						className="destination-list"
						toggleView={this.toggleView}
						addDestination={this.addDestination}
						currentUser={this.props.currentUser}
						allDestinations={this.props.allDestinations}
					/>
				)}
			</div>
		);
	}
}

export default UserPageContainer;
