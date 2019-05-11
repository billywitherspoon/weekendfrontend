import React, { Component } from 'react';
import cloudy from '../Images/cloudy.png';
import partly_cloudy_night from '../Images/cloudy_night.png';
import partly_cloudy_day from '../Images/partly_cloudy.png';
import rain from '../Images/rain.png';
import sleet from '../Images/sleet.png';
import snow from '../Images/snow.png';
// import clear_dayTEST from '../Images/sun.png';
import clear_day from '../Images/yellow_sun.png';
import clear_night from '../Images/clear_night.png';
import fog from '../Images/fog.png';
import wind from '../Images/wind.png';

class WeatherCard extends Component {
	constructor(props) {
		super(props);
		this.currentUser = JSON.parse(sessionStorage.getItem('user'));
		this.state = {};
	}

	determineDayOfWeek = () => {
		let today = new Date();
		let dayOfWeek = today.getDay();
		return dayOfWeek;
	};

	howFarFromWeekend = (dayOfWeek) => {
		let days = [];
		if (dayOfWeek === 6) {
			days.push(0);
			days.push(1);
			days.push(2);
		} else if (dayOfWeek === 7) {
			days.push(0);
			days.push(1);
		} else {
			let daysUntilWeekend = 5 - dayOfWeek;
			days.push(daysUntilWeekend);
			days.push(daysUntilWeekend + 1);
			days.push(daysUntilWeekend + 2);
		}
		return days;
	};

	showWeatherForWeekend = () => {
		//determines appropriate number of days ahead to show forecast
		let dayOfWeek = this.determineDayOfWeek();
		let daysToDisplay = this.howFarFromWeekend(dayOfWeek);

		let weekendWeatherIcons = [];
		let theIcons = [];

		//grabs the icon names associated with the upcoming weekend
		//rewritten as forEach loop below
		// daysToDisplay.map((day) => {
		// 	weekendWeatherIcons.push(this.props.destinationForecast.daily.data[day].icon);
		// });

		daysToDisplay.forEach((day) => {
			weekendWeatherIcons.push(this.props.destinationForecast.daily.data[day].icon);
		});

		//sends the appropriate .png as an <img> to render to the page
		//rewritten as forEach loop below
		// weekendWeatherIcons.map((icon) => {
		// 	if (icon === 'clear-day') {
		// 		theIcons.push(<img key={Math.random()} src={clear_day} className="weather-icon" />);
		// 	} else if (icon === 'clear-night') {
		// 		theIcons.push(<img key={Math.random()} src={clear_night} className="weather-icon" />);
		// 	} else if (icon === 'partly-cloudy-day') {
		// 		theIcons.push(<img key={Math.random()} src={partly_cloudy_day} className="weather-icon" />);
		// 	} else if (icon === 'partly-cloudy-night') {
		// 		theIcons.push(<img key={Math.random()} src={partly_cloudy_night} className="weather-icon" />);
		// 	} else if (icon === 'cloudy') {
		// 		theIcons.push(<img key={Math.random()} src={cloudy} className="weather-icon" />);
		// 	} else if (icon === 'rain') {
		// 		theIcons.push(<img key={Math.random()} src={rain} className="weather-icon" />);
		// 	} else if (icon === 'sleet') {
		// 		theIcons.push(<img key={Math.random()} src={sleet} className="weather-icon" />);
		// 	} else if (icon === 'snow') {
		// 		theIcons.push(<img key={Math.random()} src={snow} className="weather-icon" />);
		// 	} else if (icon === 'fog') {
		// 		theIcons.push(<img key={Math.random()} src={fog} className="weather-icon" />);
		// 	} else if (icon === 'wind') {
		// 		theIcons.push(<img key={Math.random()} src={wind} className="weather-icon" />);
		// 	}
		// });

		weekendWeatherIcons.forEach((icon) => {
			if (icon === 'clear-day') {
				theIcons.push(<img alt={'Clear Day'} key={Math.random()} src={clear_day} className="weather-icon" />);
			} else if (icon === 'clear-night') {
				theIcons.push(
					<img alt={'Clear Night'} key={Math.random()} src={clear_night} className="weather-icon" />
				);
			} else if (icon === 'partly-cloudy-day') {
				theIcons.push(
					<img alt={'Partly Cloudy'} key={Math.random()} src={partly_cloudy_day} className="weather-icon" />
				);
			} else if (icon === 'partly-cloudy-night') {
				theIcons.push(
					<img
						alt={'Partly Cloudy Night'}
						key={Math.random()}
						src={partly_cloudy_night}
						className="weather-icon"
					/>
				);
			} else if (icon === 'cloudy') {
				theIcons.push(<img alt={'Cloudy'} key={Math.random()} src={cloudy} className="weather-icon" />);
			} else if (icon === 'rain') {
				theIcons.push(<img alt={'Rain'} key={Math.random()} src={rain} className="weather-icon" />);
			} else if (icon === 'sleet') {
				theIcons.push(<img alt={'Sleet'} key={Math.random()} src={sleet} className="weather-icon" />);
			} else if (icon === 'snow') {
				theIcons.push(<img alt={'Snow'} key={Math.random()} src={snow} className="weather-icon" />);
			} else if (icon === 'fog') {
				theIcons.push(<img alt={'Fog'} key={Math.random()} src={fog} className="weather-icon" />);
			} else if (icon === 'wind') {
				theIcons.push(<img alt={'Wind'} key={Math.random()} src={wind} className="weather-icon" />);
			}
		});

		return theIcons;
	};

	renderWeatherTags = () => {
		return null;
	};

	render() {
		return (
			<div className="flex-center">
				<div className="weather-card">{this.showWeatherForWeekend()}</div>
			</div>
		);
	}
}

export default WeatherCard;
