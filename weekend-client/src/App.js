import React, { Component } from 'react';
import './App.css';

import DestinationFormContainer from './containers/DestinationFormContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <DestinationFormContainer />
      </div>
    );
  }
}

export default App;
