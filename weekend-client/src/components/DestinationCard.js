import React, { Component } from 'react';

class DestinationCard extends Component {

constructor(props) {
  super(props);
  this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  this.state = {};
}
      determineDayOfWeek = () => {
        let today = new Date()
        let dayOfWeek = today.getDay()
        this.howFarFromWeekend(dayOfWeek)
      }

      howFarFromWeekend = (dayOfWeek) => {
        if (dayOfWeek === 6 || dayOfWeek === 7) {
          console.log("it is the weekend. //Return current weather?")
        }else{
          let daysUntilWeekend = 5 - dayOfWeek
          return daysUntilWeekend
        }
      }

      showWeatherForWeekend = () => {
        let daysUntilWeekend = this.determineDayOfWeek()
        //determine appropriate number of days ahead to show forecast
        //return the forecast for upcoming Fri/Sat/Sun
        console.log("working on weather.")
      }

  render() {

    let recentForecast = this.props.destination.forecasts
    return (
      <div  className="destination-card">
        {this.determineDayOfWeek()}
        <h2>{this.props.destination.name}</h2>
        <img src={this.props.destination.image} className="destination-card-image"/>
        <h5>{recentForecast[recentForecast.length -1].data.daily.summary}</h5>
        <p>{recentForecast[recentForecast.length -1].data.daily.icon}</p>
      </div>
    );
  }
}

export default DestinationCard;
