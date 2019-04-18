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
			showDestinationFormContainer: false,
			currentDestination: '',
			fakeState: 1
		};
	}

	//Toggles between user's profile container and explore container page
	toggleView = () => {
		this.setState((prevState) => {
			return { viewProfile: !prevState.viewProfile };
		});
	};

	updateUserPageContainer = () => {
		this.forceUpdate();
		this.setState((st) => {
			return {
				fakeState: st.fakeState + 1
			};
		});
	};

	addDestination = (destination = '') => {
		this.setState({
			showDestinationFormContainer: true,
			currentDestination: destination
		});
	};

	hideDestinationForm = () => {
		this.setState({
			showDestinationFormContainer: false,
			currentDestination: ''
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
					<DestinationFormContainer
						hideDestinationForm={this.hideDestinationForm}
						currentDestination={this.state.currentDestination}
						updateUserPageContainer={this.updateUserPageContainer}
					/>
				</span>
			);
		} else {
			return null;
		}
	};

	handleAddToFavorites = (destination) => {
		this.setState({ currentDestination: destination });
	};

	render() {
		return (
			<div id="user-page-container">
				{this.renderDestinationFormContainer()}
				<NavBar
					viewProfile={this.state.viewProfile}
					toggleView={this.toggleView}
					addDestination={this.addDestination}
					logoutUser={this.props.logoutUser}
				/>
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
