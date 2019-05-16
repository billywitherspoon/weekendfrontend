import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class AutocompleteSearch extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = { address: '' };
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	handleSelect = (address) => {
		console.log('properly formated address', address);
		geocodeByAddress(address)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => {
				this.props.setLatLng(latLng);
				this.props.setDestination(address);
				// this.addPlaceId();
			})
			.catch((error) => console.error('Error', error));
	};

	// addPlaceId = () => {
	// 	console.log('Adding place id');
	// 	geocodeByAddress(this.state.address)
	// 		.then((results) => this.props.setPlaceId(results[0].place_id))
	// 		.catch((error) => console.error('Error', error));
	// };

	render() {
		return (
			<PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div id="autocomplete-container">
						<input
							{...getInputProps({
								placeholder: 'Type a Destination',
								id: 'autocomplete-input'
							})}
						/>
						<div id="autocomplete-drop-down">
							{loading && <div />}
							{suggestions.map((suggestion) => {
								const className = suggestion.active ? 'suggestion-item-active' : 'suggestion-item';

								return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className
										})}
									>
										<span>{suggestion.formattedSuggestion.mainText}</span>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		);
	}
}

export default AutocompleteSearch;
