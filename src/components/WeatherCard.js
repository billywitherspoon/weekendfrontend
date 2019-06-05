import React, { Component } from 'react';
import cloudy from '../Images/cloudy.png';
import partly_cloudy_night from '../Images/cloudy_night.png';
import partly_cloudy_day from '../Images/partly_cloudy.png';
import rain from '../Images/rain.png';
import sleet from '../Images/sleet.png';
import snow from '../Images/snow.png';
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

	//finds the current day of the week
	determineDayOfWeek = () => {
		let today = new Date();
		let dayOfWeek = today.getDay();
		return dayOfWeek;
	};

	//takes an argument of the current day of week
	//returns an array of size 2 or 3
	//returned array is an index for sat, sun or fri, sat, sun
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

	//returns weather data for the weekend
	weekendWeatherIcons = () => {
		weekendIconNames.forEach((icon) => {
			if (icon === 'clear-day') {
				weekendIcons.push(
					<img alt={'Clear Day'} key={Math.random()} src={clear_day} className="weather-icon" />
				);
			} else if (icon === 'clear-night') {
				weekendIcons.push(
					<img alt={'Clear Night'} key={Math.random()} src={clear_night} className="weather-icon" />
				);
			} else if (icon === 'partly-cloudy-day') {
				weekendIcons.push(
					<img alt={'Partly Cloudy'} key={Math.random()} src={partly_cloudy_day} className="weather-icon" />
				);
			} else if (icon === 'partly-cloudy-night') {
				weekendIcons.push(
					<img
						alt={'Partly Cloudy Night'}
						key={Math.random()}
						src={partly_cloudy_night}
						className="weather-icon"
					/>
				);
			} else if (icon === 'cloudy') {
				weekendIcons.push(<img alt={'Cloudy'} key={Math.random()} src={cloudy} className="weather-icon" />);
			} else if (icon === 'rain') {
				weekendIcons.push(<img alt={'Rain'} key={Math.random()} src={rain} className="weather-icon" />);
			} else if (icon === 'sleet') {
				weekendIcons.push(<img alt={'Sleet'} key={Math.random()} src={sleet} className="weather-icon" />);
			} else if (icon === 'snow') {
				weekendIcons.push(<img alt={'Snow'} key={Math.random()} src={snow} className="weather-icon" />);
			} else if (icon === 'fog') {
				weekendIcons.push(<img alt={'Fog'} key={Math.random()} src={fog} className="weather-icon" />);
			} else if (icon === 'wind') {
				weekendIcons.push(<img alt={'Wind'} key={Math.random()} src={wind} className="weather-icon" />);
			}
		});
	};

	w;

	weekendWeatherRow = () => {
		let dayOfWeek = this.determineDayOfWeek();
		let daysToDisplay = this.howFarFromWeekend(dayOfWeek);

		let weekendIconNames = [];
		let weekendData = [];

		daysToDisplay.forEach((day) => {
			weekendIconNames.push(this.props.destinationForecast.daily.data[day].icon);
		});

		return (
			<div className="weather-row">
				<div className="single-day-weather">
					<div>{this.weekendWeatherIcons}</div>
				</div>
			</div>
		);
	};

	//function for future implementation of weather tags
	// renderWeatherTags = () => {
	// 	return null;
	// };

	render() {
		return <React.Fragment>{this.weekendWeatherRow()}</React.Fragment>;
	}
}

export default WeatherCard;
