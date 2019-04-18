// <div className="sub-title">Tags</div>
// <div id="destination-tag-container">{this.renderDestinationTags()}</div>
//add later after dest-title
// <WeatherCard/>

// let recentForecast = this.props.destination.forecasts;
// <img src={this.props.destination.image}
// </div>
// {this.determineDayOfWeek()}
// <div className=>.data.daily.summary}</div>
// <p>{recentForecast[recentForecast.length -1].data.daily.icon}</p>

import React, { Component } from 'react';
import WeatherCard from './WeatherCard'

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
						THIS WEEKEND'S FORECAST:
						<WeatherCard destinationForecast={forecast}/>
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
