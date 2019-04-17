import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';
import NavBar from '../components/NavBar';
import ProfileContainer from './ProfileContainer';
import ExploreContainer from './ExploreContainer';

class UserPageContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
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
		let nonFormElements = document.getElementsByClassName('non-form-element');
		if (this.state.showDestinationFormContainer && nonFormElements.length) {
			for (let i = 0; i < nonFormElements.length; i++) {
				nonFormElements[i].classList.add('blurred');
			}
		} else if (nonFormElements.length) {
			for (let i = 0; i < nonFormElements.length; i++) {
				nonFormElements[i].classList.remove('blurred');
			}
		}
	};

	renderDestinationFormContainer = () => {
		this.toggleBackgroundBlur();
		if (this.state.showDestinationFormContainer) {
			return (
				<span id="destination-form-background">
					<DestinationFormContainer />
				</span>
			);
		} else {
			return null;
		}
	};

	render() {
		return (
			<div id="user-page-container">
				{this.renderDestinationFormContainer()}
				<NavBar addDestination={this.addDestination} logoutUser={this.props.logoutUser} />
				{this.state.viewProfile ? (
					<ProfileContainer toggleView={this.toggleView} addDestination={this.addDestination} />
				) : (
					<ExploreContainer
						toggleView={this.toggleView}
						addDestination={this.addDestination}
						allDestinations={this.props.allDestinations}
					/>
				)}
			</div>
		);
	}
}

export default UserPageContainer;
