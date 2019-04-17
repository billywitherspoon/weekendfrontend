import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';

import DestinationCard from '../components/DestinationCard';

class ExploreContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { allDestinations: '' };
	}

	componentDidMount = () => {
		this.fetchDestinations();
	};

	fetchDestinations = () => {
		fetch('http://localhost:3000/api/v1/destinations').then((res) => res.json()).then((json) => {
			this.setState({ allDestinations: json });
			console.log('all destinations', json);
		});
	};

	renderDestinationList = () => {
		if (this.state.allDestinations) {
			return (
				<div className="destination-list">
					{this.state.allDestinations.map((destination) => {
						return <DestinationCard destination={destination} />;
					})}
				</div>
			);
		}
	};

	render() {
		return (
			<div id="explore-container" className="non-form-element">
				On explore container page.
				<button onClick={() => this.props.toggleView()}>View Profile</button>
				{this.renderDestinationList()}
			</div>
		);
	}
}

export default ExploreContainer;
