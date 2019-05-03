import React, { Component } from 'react';
// import DestinationFormContainer from './DestinationFormContainer';

import DestinationCard from '../components/DestinationCard';

class ExploreContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = { allDestinations: '' };
	}

	componentDidMount = () => {
		this.fetchDestinations();
	};

	fetchDestinations = () => {
		fetch('http://weekendweatherwatcherbackend.herokuapp.com/api/v1/destinations')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ allDestinations: json });
				console.log('all destinations', json);
			});
	};

	renderDestinationList = () => {
		if (this.state.allDestinations) {
			return (
				<div className="destination-list">
					{this.state.allDestinations.map((destination) => {
						return (
							<DestinationCard
								key={Math.random()}
								destination={destination}
								addDestination={this.props.addDestination}
							/>
						);
					})}
				</div>
			);
		}
	};

	render() {
		return (
			<div id="explore-container" className="non-form-element">
				{this.renderDestinationList()}
			</div>
		);
	}
}

export default ExploreContainer;
