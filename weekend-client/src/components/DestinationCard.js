import React, { Component } from 'react';

class DestinationCard extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {};
	}
	render() {
		let recentForecast = this.props.destination.forecasts;
		return (
			<div className="destination-card">
				<h2>{this.props.destination.name}</h2>
				<h5>{recentForecast[recentForecast.length - 1].data.daily.summary}</h5>
				<p>{recentForecast[recentForecast.length - 1].data.daily.icon}</p>
			</div>
		);
	}
}

export default DestinationCard;
