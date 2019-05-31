import React, { Component } from 'react';
import DestinationCard from '../components/DestinationCard';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
	}

	//renders a set of destination cards for a single tag div
	renderDestinationCards = (tagId) => {
		let destinationCardArray = [];
		for (let i = 0; i < this.props.allFavorites.length; i++) {
			for (let j = 0; j < this.props.allFavorites[i].tags.length; j++)
				if (this.props.allFavorites[i].tags[j].id === tagId) {
					let destination = this.props.allFavorites[i].destination;
					destination.forecasts = this.props.allFavorites[i].forecasts;
					destinationCardArray.push(
						<DestinationCard
							destination={destination}
							profileView={true}
							forecasts={this.props.allFavorites[i].forecasts}
							key={i}
						/>
					);
				}
		}
		return destinationCardArray;
	};

	//renders the divs that have a single tag and multiple destinations nested
	renderTagDivs = () => {
		if (this.props.allTags && this.props.allFavorites) {
			return this.props.allTags.map((tag) => {
				return (
					<div id="user-tag-container" key={Math.random()}>
						<div id="user-tag-name">{tag.name}</div>
						{this.renderDestinationList(tag.id)}
					</div>
				);
			});
		}
	};

	//renders a single div that has a nested set of destination card divs for a single tag div
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

export default ProfileContainer;
