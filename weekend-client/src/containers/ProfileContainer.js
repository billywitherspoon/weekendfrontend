import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';
import DestinationCard from '../components/DestinationCard';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = { allFavorites: '' };
	}

	componentDidMount = () => {
		this.fetchFavorites();
	};

	fetchFavorites = () => {
		fetch(`http://localhost:3000/api/v1/favorites/user/${this.currentUser.id}`)
			.then((res) => res.json())
			.then((json) => {
				let allFavorites = [];
				for (let i = 0; i < json.length; i++) {
					allFavorites.push(json[i].destination);
				}
				this.setState({
					allFavorites: allFavorites
				});
				console.log(allFavorites);
			});
	};

	renderDestinationList = () => {
		if (this.state.allFavorites) {
			return (
				<div className="destination-list">
					{this.state.allFavorites.map((destination) => {
						return <DestinationCard destination={destination} profileView={true} />;
					})}
				</div>
			);
		}
	};

	render() {
		return (
			<div id="profile-container" className="non-form-element">
				{this.renderDestinationList()}
			</div>
		);
	}
}

export default ProfileContainer;
