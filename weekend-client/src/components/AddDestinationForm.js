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


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default AddDestinationForm;
