import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class DestinationCard extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {};
	}

	render() {
		let forecast = this.props.destination.forecasts[this.props.destination.forecasts.length - 1].data;
		return (
			<div className="flex-center">
				<div className="destination-card">
					<div className="dest-card-title">{this.props.destination.name.split(',')[0]}</div>

					<div className="weather-icons">
						<div className="weather-card-text">This Weekend's Forecast</div>
						<WeatherCard destinationForecast={forecast} />
					</div>

					{this.props.profileView ? null : (
						<button
							className="button"
							onClick={() => {
								this.props.addDestination(this.props.destination);
							}}
						>
							ADD TO FAVORITES
						</button>
					)}
				</div>
			</div>
		);
	}
}

export default DestinationCard;
