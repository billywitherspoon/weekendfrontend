import React, { Component } from 'react';
import AutocompleteSearch from '../components/AutocompleteSearch';
import AddDestinationTags from '../components/AddDestinationTags';

class DestinationFormContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: '',
			sessionToken: this.createSessionToken(),
			latLng: {},
			addTags: false,
			tags: []
		};
	}

	createSessionToken = () => {
		let token = Math.random() * 1000000000000000000;
		console.log('TOKEN:', token);
		return token;
	};

	handleSubmit = (ev) => {
		ev.preventDefault();
		console.log('Handling form submit.');
	};

	setLatLng = (latLng) => {
		console.log('Setting lat/lon state in form.');
		this.setState({ latLng, addTags: true }, console.log('Here.'));
	};

	addTag = (tag) => {
		console.log('Adding a tag.');
	};

	render() {
		return (
			<div>
				<h3>Add New Destination:</h3>
				<form onSubmit={(ev) => this.handleSubmit(ev)}>
					<AutocompleteSearch setLatLng={this.setLatLng} />
					{true ? <AddDestinationTags tags={this.state.tags} addTag={this.addTag} /> : null}
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default DestinationFormContainer;
