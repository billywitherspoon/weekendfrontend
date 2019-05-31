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
			allFavorites: null,
			userInfo: null,
			allTags: null,
			allDestinations: null
		};
	}

	componentDidMount = () => {
		this.fetchFavorites();
		this.fetchUser();
		this.fetchAllDestinations();
	};

	//fetches all destinations for all users from the backend
	fetchAllDestinations = () => {
		fetch('https://weekendweatherwatcherbackend.herokuapp.com/api/v1/destinations')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ allDestinations: json });
				console.log('all destinations', json);
			});
	};

	//fetches a users favorites from the backend
	fetchFavorites = () => {
		fetch(`https://weekendweatherwatcherbackend.herokuapp.com/api/v1/favorites/user/${this.currentUser.id}`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					allFavorites: json
				});
				console.log('favorites', json);
			});
	};

	//fetches a users info from the backend
	fetchUser = () => {
		fetch(`https://weekendweatherwatcherbackend.herokuapp.com/api/v1/users/${this.currentUser.id}`)
			.then((res) => res.json())
			.then((json) => {
				console.log('userInfoAPIreturn', json);
				this.setState({
					userInfo: json,
					allTags: json.tags
				});
			});
	};

	//Toggles between user's profile container and explore container page
	toggleView = () => {
		this.setState((prevState) => {
			return { viewProfile: !prevState.viewProfile };
		});
	};

	//takes an argument of a new destination and updates the state for allFavorites and allDestinations
	updateDestinationStates = (destination) => {
		this.setState((st) => {
			return {
				allDestinations: st.push(destination),
				allFavorites: st.push(destination)
			};
		});
	};

	//when called, shows the destination form container and updates the current destination state
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
						updateDestinationStates={this.updateDestinationStates}
					/>
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
				<NavBar
					viewProfile={this.state.viewProfile}
					toggleView={this.toggleView}
					addDestination={this.addDestination}
					logoutUser={this.props.logoutUser}
				/>
				{this.state.viewProfile ? (
					<ProfileContainer
						toggleView={this.toggleView}
						addDestination={this.addDestination}
						allFavorites={this.state.allFavorites}
						userInfo={this.state.userInfo}
						allTags={this.state.allFavorites}
					/>
				) : (
					<ExploreContainer
						toggleView={this.toggleView}
						addDestination={this.addDestination}
						allDestinations={this.state.allDestinations}
					/>
				)}
			</div>
		);
	}
}

export default UserPageContainer;
