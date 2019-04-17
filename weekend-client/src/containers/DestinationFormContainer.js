import React, { Component, PureComponent } from 'react';
import AutocompleteSearch from '../components/AutocompleteSearch';
import AddDestinationTagForm from '../components/AddDestinationTagForm';

class DestinationFormContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {
			userInput: '',
			latLng: {},
			tags: [],
			destination: '',
			placeId: '',
			photos: [],
			currentTag: ''
		};
	}

	updateTagName = (ev) => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	handleDestinationFormSubmit = (ev) => {
		ev.preventDefault();
		console.log('handling new form submit destination creation');
		let destinationFormData = {
			destination: {
				latitude: this.state.latLng.lat,
				longitude: this.state.latLng.lng,
				name: this.state.destination,
				tags: this.state.tags,
				user_id: 1
			}
		};

		console.log('DATA: ', destinationFormData);

		fetch('http://localhost:3000/api/v1/destinations', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(destinationFormData)
		})
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch((error) => console.error('Error', error));
	};

	setLatLng = (latLng) => {
		console.log('Setting lat/lon state in form.');
		// this.setState((prevState) => {
		// 	return { latLng: latLng };
		// });
		this.setState({ latLng });
	};

	setDestination = (destination) => {
		this.setState({ destination });
	};

	setPlaceId = (placeId) => {
		this.setState({ placeId });
		// fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=photo&key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA`)
		fetch(
			'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA'
		)
			.then((res) => res.json())
			.then((json) => console.log('IMGS?: ', json));
	};

	// renderTagForm = () => {
	// 	// let tempArray = [];
	// 	// for (let i = 0; i < this.state.tagCount; i++) {
	// 	// 	tempArray.push('item');
	// 	// }
	// 	// return tempArray.map((item) => {
	// 	return;
	// };

	// addNewTagForm = () => {
	// 	this.setState((prevState) => {
	// 		return { tagCount: prevState.tagCount + 1, addTags: false };
	// 	});
	// };

	persistTag = (ev) => {
		ev.preventDefault();
		let hashTag = '#' + this.state.currentTag.split(' ').join('');
		this.setState((st) => {
			return {
				tags: st.tags.concat(hashTag),
				currentTag: ''
			};
		});
		console.log(hashTag);
		// this.setState({ addTags: true, tagCount: 0 });
	};

	renderTags = () => {
		return;
	};

	render() {
		return (
			<div className="destination-form-container">
				{!this.state.destination ? (
					<div className="destination-form-container">
						<AutocompleteSearch
							setLatLng={this.setLatLng}
							setDestination={this.setDestination}
							setPlaceId={this.setPlaceId}
						/>
					</div>
				) : (
					<div className="destination-form-container">
						<div id="destination-display">
							<h3>{this.state.destination}</h3>
							{this.renderTags}
							{this.state.tags.map((tag) => <h5>{tag}</h5>)}
							<h5># {this.state.currentTag}</h5>
						</div>
						<AddDestinationTagForm
							currentTag={this.state.currentTag}
							persistTag={this.persistTag}
							updateTagName={this.updateTagName}
						/>
						<button className="button" onClick={(ev) => this.handleDestinationFormSubmit(ev)}>
							ADD TO MY FAVORITES
						</button>
					</div>
				)}
			</div>
		);
	}
}

// sessionToken: this.createSessionToken(),

// createSessionToken = () => {
// 	let token = Math.random() * 1000000000000000000;
// 	console.log('TOKEN:', token);
// 	return token;
// };

export default DestinationFormContainer;
