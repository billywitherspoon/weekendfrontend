import React, { Component } from 'react';

class AddDestinationForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: "",
      sessionToken: this.createSessionToken()
    }

  }

  createSessionToken = () => {
    let token = Math.random()*1000000000000000000
    console.log("TOKEN:", token)
    return token
  }

  // componentDidMount = () => {
  //   console.log(this.createSessionToken())
  //   fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${"Seattl"}&key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA&sessiontoken=${this.state.sessionToken}`)
  //   .then(res => res.json())
  //   .then(json => {
  //     console.log("JSON: ",  json)
  //   })
  //   .catch(json => console.log("hi", json))
  // }

  // componentDidMount = () => {
  //   const input = document.getElementById('autocomplete-input');
  //
  //   const autocomplete = new google.maps.places.Autocomplete((input), {
  //     types: [`address`],
  //     componentRestrictions: [`us`],
  //   });
  // }


  // function initialize() {
  //   const input = document.getElementById('searchTextField');
  //   new google.maps.places.Autocomplete(input);
  // }

  // google.maps.event.addDomListener(window, 'load', initialize);
  // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


  // <form>
  //   <input id="autocomplete-input" type="text" placeholder="Start typing here"></input>
  // </form>

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default AddDestinationForm;
