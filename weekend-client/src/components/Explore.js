import React, { Component } from 'react';

class Explore extends Component {
  render() {
    return (
      <div>
      On explore page.
      <button onClick={() => this.props.toggleView()}>View Profile</button>
      </div>
    );
  }
}

export default Explore;
