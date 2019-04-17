import React, { Component } from 'react';
import DestinationFormContainer from '../containers/DestinationFormContainer';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDestinationForm: false
		};
		this.fetchFavorites();
	}

	fetchFavorites = () => {
		fetch(`http://localhost:3000/api/v1/favorites/user/${this.props.currentUser.id}`)
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	addDestination = () => {
		this.setState((prevState) => {
			return { showDestinationForm: !prevState.showDestinationForm };
		});
	};

	render() {
		return (
			<div>
				This is the profile page.
				<button onClick={() => this.props.toggleView()}>Explore</button>
			</div>
		);
	}
}

export default Profile;
