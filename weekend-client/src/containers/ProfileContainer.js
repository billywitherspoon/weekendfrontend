import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {};
	}

	componentDidMount = () => {
		this.fetchFavorites();
	};

	fetchFavorites = () => {
		fetch(`http://localhost:3000/api/v1/favorites/user/${this.currentUser.id}`)
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	// I think the add destination button will live in the nav bar.

	// addDestination = () => {
	// 	this.setState((prevState) => {
	// 		return { showDestinationForm: !prevState.showDestinationForm };
	// 	});
	// };

	render() {
		return (
			<div id="profile-container" className="non-form-element">
				This is the profile container page.
				<button onClick={() => this.props.toggleView()}>Explore</button>
			</div>
		);
	}
}

export default ProfileContainer;
