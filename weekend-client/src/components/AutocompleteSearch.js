import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class AutocompleteSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { address: '' };
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	// This method returns the selected destination's "latLng" and "address"
	// to the form to set state in DestinationFormContainer. Destination found
	// by PlacesAutocomplete below.
	handleSelect = (address) => {
		geocodeByAddress(address)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => {
				this.props.setLatLng(latLng);
				this.props.setDestination(address);
			})
			.catch((error) => console.error('Error', error));
	};

	render() {
		return (
			<PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: 'Type a Destination',
								className: 'location-search-input'
							})}
						/>
						<div id="autocomplete-dropdown-container">
							{loading && <div />}
							{suggestions.map((suggestion) => {
								const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
								// inline style for demonstration purpose
								// const searchOptions = {
								// 	location: new google.maps.LatLng()
								// };
								const style = suggestion.active
									? { backgroundColor: '#fafafa', cursor: 'pointer' }
									: { backgroundColor: '#ffffff', cursor: 'pointer' };
								return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className,
											style
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

//can enter a loading on line 40 between divs

export default AutocompleteSearch;
