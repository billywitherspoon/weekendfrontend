import React, { Component } from 'react';
import DestinationFormContainer from '../containers/DestinationFormContainer';

import DestinationCard from './DestinationCard'

class Explore extends Component {
  render() {
    return (
      <div>
      On explore page.
      <button onClick={() => this.props.toggleView()}>View Profile</button>
      <DestinationFormContainer
        currentUser={this.props.currentUser}
        loginUser={this.props.loginUser}
        logoutUser={this.props.logoutUser}
      />
      {this.props.allDestinations.map(destination => {
        return <DestinationCard destination={destination}/>
      })}

      </div>
    );
  }
}

export default Explore;
