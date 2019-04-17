import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';
import NavBar from '../components/NavBar';
import ProfileContainer from './ProfileContainer';
import ExploreContainer from './ExploreContainer';

class UserPageContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			viewProfile: true,
			selectedLocation: '',
			showDestinationFormContainer: false
		};
	}

	//Toggles between user's profile container and explore container page
	toggleView = () => {
		this.setState((prevState) => {
			return { viewProfile: !prevState.viewProfile };
		});
	};

	addDestination = () => {
		this.setState({
			showDestinationFormContainer: true
		});
	};

	toggleBackgroundBlur = () => {
		// let nonFormElements = document.getElementsByClassName('non-form-element');
		// if (this.state.showDestinationFormContainer && nonFormElements.length) {
		// 	debugger;
		// 	nonFormElements.forEach((element) => {
		// 		element.classList.add('blurred');
		// 	});
		// } else if (nonFormElements.length) {
		// 	debugger;
		// 	nonFormElements.forEach((element) => {
		// 		element.classList.remove('blurred');
		// 	});
		// }
	};

	renderDestinationFormContainer = () => {
		this.toggleBackgroundBlur();
		if (this.state.showDestinationFormContainer) {
			return (
				<div id="user-form-container">
					<DestinationFormContainer />
				</div>
			);
		} else {
			return null;
		}
	};

	render() {
		return (
			<div id="user-page-container">
				{this.renderDestinationFormContainer()}
				<NavBar
					addDestination={this.addDestination}
					currentUser={this.props.currentUser}
					logoutUser={this.props.logoutUser}
				/>
				{this.state.viewProfile ? (
					<ProfileContainer
						toggleView={this.toggleView}
						addDestination={this.addDestination}
						currentUser={this.props.currentUser}
					/>
				) : (
					<ExploreContainer
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
