import React, { Component } from 'react';
import DestinationFormContainer from '../containers/DestinationFormContainer';

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
      </div>
    );
  }
}

export default Explore;
