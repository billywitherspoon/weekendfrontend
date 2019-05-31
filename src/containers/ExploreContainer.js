import React, { Component } from 'react';
import DestinationCard from '../components/DestinationCard';

class ExploreContainer extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
	}

	renderDestinationList = () => {
		if (this.props.allDestinations) {
			return (
				<div className="destination-list">
					{this.props.allDestinations.map((destination) => {
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
