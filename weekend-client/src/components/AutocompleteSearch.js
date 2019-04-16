import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class AutocompleteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {address: ''};
  }

  handleChange = address => {
    this.setState({ address });
  };

  // This method returns the selected destination's "latLng" and "address"
  // to the form to set state in DestinationFormContainer. Destination found
  // by PlacesAutocomplete below.
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.setLatLng(latLng);
        this.props.setDestination(address);
        this.addPlaceId()
      })
      .catch(error => console.error('Error', error));
    };

    addPlaceId = () => {
      console.log("Adding place id");
      geocodeByAddress(this.state.address)
        .then(results => this.props.setPlaceId(results[0].place_id))
        .catch(error => console.error('Error', error));
    };


  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
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
