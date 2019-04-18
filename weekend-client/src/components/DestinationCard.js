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

class DestinationCard extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {};
	}

	determineDayOfWeek = () => {
		let today = new Date();
		let dayOfWeek = today.getDay();
		this.howFarFromWeekend(dayOfWeek);
	};

	howFarFromWeekend = (dayOfWeek) => {
		if (dayOfWeek === 6 || dayOfWeek === 7) {
			console.log('it is the weekend. //Return current weather?');
		} else {
			let daysUntilWeekend = 5 - dayOfWeek;
			return daysUntilWeekend;
		}
	};

	showWeatherForWeekend = () => {
		let daysUntilWeekend = this.determineDayOfWeek();
		//determine appropriate number of days ahead to show forecast
		//return the forecast for upcoming Fri/Sat/Sun
		console.log('working on weather.');
	};

	renderDestinationTags = () => {
		return null;

		// Array.removeDuplicates
		// return Array.map((tag) => {
		//   return <div className='hashtag'>tag</div>
		// })
	};

	// renderAddToFavoritesButton = () => {
	// 	console.log('hit fav button');
	// 	console.log('profileview', this.props.profileView);
	// 	return
	// 	);
	// };

	render() {
		return (
			<div className="flex-center">
				<div className="destination-card">
					<div className="dest-card-title">{this.props.destination.name.split(',')[0]}</div>
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
