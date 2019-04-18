import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';
import DestinationCard from '../components/DestinationCard';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {
			allFavorites: '',
			userInfo: '',
			allTags: ''
		};
	}

	componentDidMount = () => {
		this.fetchFavorites();
		this.fetchUser();
	};

	fetchFavorites = () => {
		fetch(`http://localhost:3000/api/v1/favorites/user/${this.currentUser.id}`)
			.then((res) => res.json())
			.then((json) => {
				// let allFavorites = [];
				// for (let i = 0; i < json.length; i++) {
				// 	allFavorites.push(json[i].destination);
				// }
				this.setState({
					allFavorites: json
				});
				console.log('favorites', json);
			});
	};

	fetchUser = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.currentUser.id}`).then((res) => res.json()).then((json) => {
			console.log('userInfoAPIreturn', json);
			this.setState({
				userInfo: json,
				allTags: json.tags
			});
		});
	};

	renderDestinationCards = (tagId) => {
		let destinationCardArray = [];
		for (let i = 0; i < this.state.allFavorites.length; i++) {
			for (let j = 0; j < this.state.allFavorites[i].tags.length; j++)
				if (this.state.allFavorites[i].tags[j].id === tagId) {
					let destination = this.state.allFavorites[i].destination;
					destination.forecasts = this.state.allFavorites[i].forecasts;
					destinationCardArray.push(
						<DestinationCard
							destination={destination}
							profileView={true}
							forecasts={this.state.allFavorites[i].forecasts}
							key={i}
						/>
					);
				}
		}
		return destinationCardArray;
	};

	renderTagDivs = () => {
		if (this.state.allTags && this.state.allFavorites) {
			return this.state.allTags.map((tag) => {
				return (
					<div id="user-tag-container">
						<div id="user-tag-name">{tag.name}</div>
						{this.renderDestinationList(tag.id)}
					</div>
				);
			});
		}
	};

	renderDestinationList = (tagId) => {
		return <div className="destination-list">{this.renderDestinationCards(tagId)}</div>;
	};

	render() {
		return (
			<div id="profile-container" className="non-form-element">
				{this.renderTagDivs()}
			</div>
		);
	}
}
// {this.renderDestinationList()}

export default ProfileContainer;
