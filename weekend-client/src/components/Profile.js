import React, { Component } from 'react';
import DestinationFormContainer from '../containers/DestinationFormContainer';


class Profile extends Component {
  constructor(props) {
		super(props);
		this.state = {
      showDestinationForm: false
    };
	}

  addDestination = () => {
    this.setState((prevState) => {
      return {showDestinationForm: !(prevState.showDestinationForm)}
    })
  }

  render() {
    return (
      <div>
      This is the profile.
      <button onClick={() => this.props.toggleView()}>Explore</button>
      {this.state.showDestinationForm?
        <>
        <DestinationFormContainer />
        {console.log("can add 2nd arg to ternary")}
        </>
        :
        <button onClick={() => this.addDestination()}>Add Destination</button>
      }
      </div>
    );
  }
}

export default Profile;
