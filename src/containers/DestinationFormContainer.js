import React, { Component, Fragment } from 'react';
import AutocompleteSearch from '../components/AutocompleteSearch';
import { geocodeByAddress } from 'react-places-autocomplete';
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

	//sets the destination after the form container has been mounted
	componentDidMount = () => {
		let latLng = '';
		console.log('currentDestination', this.props.currentDestination);
		if (this.props.currentDestination) {
			latLng = {
				latitude: this.props.currentDestination.latitude,
				longitude: this.props.currentDestination.longitude
			};
			this.setLatLng(latLng);
			this.setDestination(this.props.currentDestination.name);
			this.addPlaceIdCurrentDestination();
		}
	};

	//adds a place id to the current destination
	addPlaceIdCurrentDestination = () => {
		console.log('adding place id');
		console.log('address', this.props.currentDestination.name);
		geocodeByAddress(this.props.currentDestination.name)
			.then((results) => this.setPlaceId(results[0].place_id))
			.catch((error) => console.error('Error', error));
	};

	//adds a '#' to the users input
	updateTagName = (ev) => {
		let hashTag = ev.target.value;
		if (hashTag[0] !== '#') {
			hashTag = '#' + hashTag;
		}
		this.setState({ currentTag: hashTag });
	};

	//handles submit of a new destination and its tags
	handleDestinationFormSubmit = (ev, currentDestination) => {
		if (ev) {
			ev.preventDefault();
		}
		console.log('CURRENT DESTINATION', currentDestination);
		console.log('handling new form submit destination creation');
		if (this.state.currentTag) {
			console.log('there is a current tag');
			let hashTag = '#' + this.state.currentTag.split(' ').join('').toLowerCase().replace(/\W/g, '');
			let newTags = this.state.tags.slice();
			newTags.push(hashTag);
			console.log('newTags', newTags);
			this.setState(
				{
					tags: newTags,
					currentTag: ''
				},
				() => {
					console.log('posting the destination');
					this.postDestination();
				}
			);
		} else if (this.state.tags.length) {
			console.log('no active current tag');
			console.log('posting the destination');
			this.postDestination();
		} else {
			alert('Please add a tag');
		}
	};

	//posts a new destination to the backend
	postDestination = () => {
		this.props.hideDestinationForm();
		let destinationFormData = {
			destination: {
				latitude: this.state.latLng.lat,
				longitude: this.state.latLng.lng,
				name: this.state.destination,
				tags: this.state.tags,
				user_id: this.currentUser.id
			}
		};
		console.log('Posting Destination with this data: ', destinationFormData);
		fetch('https://weekendweatherwatcherbackend.herokuapp.com/api/v1/destinations', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(destinationFormData)
		})
			.then((res) => res.json())
			.then((json) => {
				console.log('response to posting destination', json);
				this.props.updateDestinationStates(json);
			})
			.catch((error) => console.error('Error', error));
	};

	//sets the latlong as state
	setLatLng = (latLng) => {
		console.log('Setting lat/lon state in form.');
		this.setState({ latLng });
	};

	//sets the destination as set
	setDestination = (destination) => {
		console.log('Setting destination.');
		this.setState({ destination });
	};

	//handles the submit of a tag to a destination, adds to array of tags to be included upon destination form submit
	persistTag = (ev = '') => {
		if (ev) {
			ev.preventDefault();
		}
		if (this.state.currentTag) {
			let hashTag = '#' + this.state.currentTag.split(' ').join('').toLowerCase().replace(/\W/g, '');
			this.setState((st) => {
				return {
					tags: st.tags.concat(hashTag),
					currentTag: ''
				};
			});
		}
	};

	setPlaceId = (placeId) => {
		//handles the submit of a tag to a destination, adds to array of tags to be included upon destination form submit
		console.log('PLACE ID', placeId);
		this.setState({ placeId });
		// fetch(
		// 	'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA'
		// )
		// 	.then((res) => res.json())
		// 	.then((json) => console.log('IMGS?: ', json));
	};

	render() {
		return (
			<Fragment>
				{!this.state.destination ? (
					<div className="autocomplete-form-container">
						<div className="autocomplete-form">
							<AutocompleteSearch
								setLatLng={this.setLatLng}
								setDestination={this.setDestination}
								setPlaceId={this.setPlaceId}
							/>
						</div>
						<div className={`cancel-destination-container flex-center`}>
							<button
								className="button"
								id="cancel-destination-button"
								onClick={this.props.hideDestinationForm}
							>
								CANCEL
							</button>
						</div>
					</div>
				) : (
					<div className="destination-form-container">
						<div id="destination-display">
							<div id="destination-title">{this.state.destination.split(',')[0]}</div>
							<div id="tag-container">
								{this.state.tags.map((tag) => (
									<div key={Math.random()} className="hashtag">
										{tag}
									</div>
								))}
								<div className="hashtag">{this.state.currentTag}</div>
							</div>
						</div>
						<AddDestinationTagForm
							currentTag={this.state.currentTag}
							persistTag={this.persistTag}
							updateTagName={this.updateTagName}
						/>
						<div className="flex-center">
							<button
								className="button"
								id="add-to-favorite-button"
								onClick={(ev) => this.handleDestinationFormSubmit(ev, '')}
							>
								ADD TO MY FAVORITES
							</button>
						</div>
						<div className={`cancel-destination-container flex-center`}>
							<button
								className="button"
								id="cancel-destination-button"
								onClick={this.props.hideDestinationForm}
							>
								CANCEL
							</button>
						</div>
					</div>
				)}
			</Fragment>
		);
	}
}

export default DestinationFormContainer;
