import React, { Component } from 'react';
import DestinationFormContainer from './DestinationFormContainer';

import Profile from '../components/Profile'
import Explore from '../components/Explore'

class UserPageContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      viewProfile: true
    }
  }

//Toggles between user'sprofile and explore page
  toggleView = () => {
    console.log("Toggling View")
    this.setState((prevState) => {
      return {viewProfile: !(prevState.viewProfile)}
    })
  }


  render() {
    return (
      <div>
      Hello.
      {this.state.viewProfile?
        <Profile toggleView={this.toggleView}/>
          :
        <Explore toggleView={this.toggleView}/>
      }
      <DestinationFormContainer
        currentUser={this.props.currentUser}
        loginUser={this.props.loginUser}
        logoutUser={this.props.logoutUser}
      />
      </div>
    );
  }
}

export default UserPageContainer;
