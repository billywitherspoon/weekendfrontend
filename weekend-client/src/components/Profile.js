import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
      This is the profile.
      <button onClick={() => this.props.toggleView()}>Explore</button>
      </div>
    );
  }
}

export default Profile;
